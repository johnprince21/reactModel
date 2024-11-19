// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ cartCount, openCartModal }) => {
    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Fake Store</h1>
            <button
                onClick={openCartModal}
                className="text-white bg-blue-700 px-4 py-2 rounded"
            >
                Cart ({cartCount})
            </button>
        </nav>
    );
};

export default Navbar;
