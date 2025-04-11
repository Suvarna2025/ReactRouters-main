import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Filter related products by category
  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div className="container mx-auto p-4">
      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>

      {/* Product Details Section */}
      <div className="flex space-x-4">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-cover"
        />
        
        {/* Product Info */}
        <div>
          {/* Description */}
          <p className="mb-4">{product.description}</p>

          {/* Price */}
          <p className="text-lg font-semibold text-red-600">${product.price}</p>

          {/* Category */}
          <p className="text-sm text-gray-600">Category: {product.category}</p>

          {/* Rating */}
          <p className="text-sm text-yellow-400">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => alert('Add to Cart functionality here!')}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-xl font-bold text-teal-600">${item.price}</p>
                <Link to={`/product/${item.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
