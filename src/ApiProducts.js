import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ApiProducts.css";
import { useLocation, useNavigate } from "react-router-dom";

function ApiProducts() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const loc = useLocation();
  const ref = useRef();

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return (
      <div className="waiting">
        <p className="wait">Loading products...</p>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) return <p className="oops">{error}</p>;

  return (
    <>
      <label className="label">Api Products</label>

      <div className="main">
        <button
          onClick={() => navigate("/")}
          className={`click ${loc.pathname === "/" ? "clicked" : ""}`}
        >
          Api Home
        </button>
        <button
          onClick={() => navigate("/ApiProducts")}
          className={`click ${loc.pathname === "/ApiProducts" ? "clicked" : ""}`}
        >
          Api Products
        </button>
      </div>

      <div className="relative">
        <input
          ref={ref}
          className="input"
          placeholder="Search products..."
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        {filter && filtered.length > 0 && (
          <div className="overlay">
            {filtered.map((p) => (
              <div key={p.id} className="overlay-item">
                <img src={p.image} alt={p.title} />
                <p>{p.title}</p>
                <button
                  onClick={() => navigate(`/ApiProductsDetails/${p.id}`)}
                  className="sbuttons"
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="divvalue">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} className="values">
              <img src={p.image} alt={p.title} />
              <p>{p.title}</p>
              <button
                onClick={() => navigate(`/ApiProductsDetails/${p.id}`)}
                className="sbuttons"
              >
                View Product
              </button>
            </div>
          ))
        ) : (
          <p className="oops"> No products found</p>
        )}
      </div>
    </>
  );
}

export default ApiProducts;
