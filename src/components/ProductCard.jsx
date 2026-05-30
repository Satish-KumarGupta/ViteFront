const ProductCard=({ product, onPurchase })=> {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={product.imageUrl?.url}
        alt={product.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{product.title}</h2>

        <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>

        <p className="text-lg font-semibold mt-3">₹{product.price}</p>

        <button
          onClick={() => onPurchase(product._id)}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
