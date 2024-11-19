// src/components/CartModal.jsx
import React from "react";

const CartModal = ({ closeModal, cartItems, removeFromCart }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="border-b py-2 flex justify-between">
                                {item.title} - ${item.price}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CartModal;
