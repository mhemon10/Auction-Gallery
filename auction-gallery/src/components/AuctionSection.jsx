import React, { useEffect, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const AuctionSection = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/auction.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addToFavorites = (item) => {
    if (!favorites.find((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
      toast.success(`✅ Added to favorites: ${item.title}`);
    }
  };

  const removeFromFavorites = (id) => {
    const removedItem = favorites.find((item) => item.id === id);
    setFavorites(favorites.filter((item) => item.id !== id));
    if (removedItem) {
      toast.error(`❌ Removed from favorites: ${removedItem.title}`);
    }
  };

  const totalAmount = favorites.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );

  return (
    <div className="bg-[#dbe6f1] px-4 py-20">
      <div className="max-w-7xl mx-auto lg:flex gap-6">
        {/* LEFT: Auction Table */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-black mb-1">
            Active Auctions{" "}
            <span className="bg-white px-2 py-1 rounded text-blue-800 text-sm">
              {items.length}
            </span>
          </h2>
          <p className="text-gray-600 mb-4">
            Discover and bid on extraordinary items
          </p>

          <div className="bg-white rounded-lg shadow overflow-auto text-black">
            <table className="table w-full">
              <thead className="bg-blue-100 text-left text-black">
                <tr>
                  <th className="p-3">Item</th>
                  <th className="p-3">Current Bid</th>
                  <th className="p-3">Time Left</th>
                  <th className="p-3">Bid</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  const isFavorite = favorites.find((fav) => fav.id === item.id);
                  return (
                    <tr key={item.id} className="hover:bg-blue-50">
                      <td className="p-3 flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium">{item.title}</span>
                      </td>
                      <td className="p-3">${item.currentBidPrice}</td>
                      <td className="p-3">{item.timeLeft}</td>
                      <td className="p-3">
                        <button
                          onClick={() => addToFavorites(item)}
                          disabled={isFavorite}
                          className={`rounded-full p-2 w-10 h-10 flex justify-center items-center transition duration-300 ${
                            isFavorite
                              ? "bg-blue-200 text-red-500 cursor-not-allowed"
                              : "text-gray-500 hover:bg-blue-200"
                          }`}
                          title="Add to favorites"
                        >
                          <FaHeart className={`text-lg ${isFavorite ? "text-red-500" : ""}`} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: Favorites */}
        <div className="bg-white p-6 rounded-lg shadow mt-10 lg:mt-0 lg:w-[350px]">
          <h3 className="text-xl text-black font-bold mb-4 text-center">Favorite Items</h3>
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center">
              No items added yet <br />
              <span className="text-sm">
                Click the ❤️ icon to add items here.
              </span>
            </p>
          ) : (
            <ul className="space-y-3">
              {favorites.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-600 text-xs">
                      💰 ${item.currentBidPrice} | 📥 {item.bidsCount} bids
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <hr className="my-4" />
          <p className="font-semibold text-right text-black">
            Total: ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionSection;
