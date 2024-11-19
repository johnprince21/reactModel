// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border p-4 flex flex-col items-center">
            <img src={product.image} alt={product.title} className="h-32" />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
