import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ApiProductDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ApiProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setError("❌ Failed to load product details"))
      .finally(() => setLoading(false));
  }, [id]);

  const addToCart = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/carts", {
        userId: 9, // replace with real userId if auth exists
        date: new Date(),
        products: [{ productId: id, quantity: 1 }],
      });
      console.log("Added to cart:", response.data);
      alert("Product added to cart!");
    } catch (err) {
      console.error(err);
      alert("Failed to add product to cart.");
    }
  };

  if (loading) {
    return (
      <div className="waiting">
        <p className="wait">Loading product details...</p>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) return <p className="oops">{error}</p>;

  return (
    <>
      <label className={`click ${loc.pathname === "/ApiProducts" ? "clicked" : ""}`}>Api Products Details</label>

      <div className="main">
        <button
          onClick={() => navigate("/ApiProducts")}
          className={`click ${loc.pathname === "/ApiProducts" ? "clicked" : ""}`}
        >
          Api Products
        </button>
      </div>

      {product && (
        <div className="Dvalues">
          <p>{product.title}</p>
          <div>
            <p className="des">{product.description}</p>
            <img src={product.image} alt={product.title} />
            <div>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.rating.count}</p>
              <p>Rating: ⭐ {product.rating.rate}</p>
            </div>
          </div>

          <button className="Dsbuttons" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
}

export default ApiProductsDetails;
