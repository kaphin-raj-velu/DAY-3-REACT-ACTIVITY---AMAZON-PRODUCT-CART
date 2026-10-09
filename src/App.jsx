
import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">DAY 3 REACT ACTIVITY</span>
            <h2>Your Shopping Cart</h2>
            <p>Review your product and manage your order.</p>
          </div>

          <div className="cart-badge">
            🛒 {quantity} item{quantity !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="shop-layout">
          <section className="product-section">
            {showProduct ? (
              <ProductCard
                productName={productName}
                price={price}
                quantity={quantity}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                deliveryCity={deliveryCity}
                setDeliveryCity={setDeliveryCity}
              />
            ) : (
              <div className="hidden-card">
                <div className="hidden-icon">🛍️</div>
                <h3>Product hidden</h3>
                <p>Your cart details are safely preserved.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowProduct(true)}
                >
                  Show Product
                </button>
              </div>
            )}
          </section>

          <aside className="summary-card">
            <div className="summary-header">
              <h3>Cart Summary</h3>
              <span className="summary-icon">🛒</span>
            </div>

            <p className="summary-product">{productName}</p>
            <p className="muted">₹{price} per item</p>

            <div className="quantity-row">
              <span>Quantity</span>
              <div className="quantity-control">
                <button
                  aria-label="Remove one item"
                  disabled={quantity === 0}
                  onClick={() =>
                    setQuantity((previous) => previous - 1)
                  }
                >
                  −
                </button>
                <strong>{quantity}</strong>
                <button
                  aria-label="Add one item"
                  onClick={() =>
                    setQuantity((previous) => previous + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="btn btn-primary full-width"
              onClick={() =>
                setQuantity((previous) => previous + 1)
              }
            >
              + Add to Cart
            </button>

            <button
              className="btn btn-secondary full-width"
              disabled={quantity === 0}
              onClick={() =>
                setQuantity((previous) => Math.max(0, previous - 1))
              }
            >
              Remove One
            </button>

            <button
              className="btn btn-outline full-width"
              onClick={() => setQuantity(0)}
            >
              Reset Cart
            </button>

            <button
              className="btn btn-outline full-width"
              onClick={() => setShowProduct((previous) => !previous)}
            >
              {showProduct ? "Hide Product" : "Show Product"}
            </button>

            <div className="summary-divider" />

            <div className="price-row">
              <span>Price per item</span>
              <span>₹{price}</span>
            </div>

            <div className="price-row">
              <span>Quantity</span>
              <span>× {quantity}</span>
            </div>

            <div className="summary-divider" />

            <div className="total-row">
              <span>Total Amount</span>
              <strong>₹{quantity * price}</strong>
            </div>

            <div
              className={`cart-status ${
                quantity === 0 ? "empty" : "added"
              }`}
            >
              <span className="status-dot" />
              {quantity === 0
                ? "Cart is empty"
                : "Product added to cart"}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
