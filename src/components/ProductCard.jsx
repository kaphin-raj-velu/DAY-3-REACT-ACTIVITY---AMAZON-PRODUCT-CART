
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  setSelectedColor,
  deliveryCity,
  setDeliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const colors = [
    { name: "Black", value: "#202124" },
    { name: "Blue", value: "#3478d4" },
    { name: "White", value: "#f5f5f5" }
  ];

  return (
    <article className="product-card">
      <div className="product-image">
        <span className="image-label">FEATURED PRODUCT</span>

        <img
          src="https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85"
          alt="Wireless computer mouse"
        />
      </div>

      <div className="product-content">
        <div className="stock-label">
          <span className="stock-dot" />
          In stock
        </div>

        <h2>{productName}</h2>
        <p className="product-description">
          Wireless connectivity · Ergonomic design
        </p>

        <div className="rating">
          <span>★★★★★</span>
          <small>Sample product rating</small>
        </div>

        <div className="product-price">
          ₹{price}
          <span> / item</span>
        </div>

        <div className="product-divider" />

        <div className="field-group">
          <div className="field-heading">
            <label>Choose Colour</label>
            <span>{selectedColor}</span>
          </div>

          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                title={color.name}
                aria-label={color.name}
                aria-pressed={selectedColor === color.name}
                className={`color-swatch ${
                  selectedColor === color.name ? "selected" : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.name)}
              />
            ))}
          </div>

          <div className="selected-color-text">
            Selected colour: <strong>{selectedColor}</strong>
          </div>
        </div>

        <div className="product-divider" />

        <div className="field-group">
          <label htmlFor="deliveryCity">Deliver to</label>

          <div className="delivery-input">
            <span>⌖</span>
            <input
              id="deliveryCity"
              type="text"
              value={deliveryCity}
              onChange={(event) => setDeliveryCity(event.target.value)}
              placeholder="Enter your city"
            />
          </div>

          <p className="delivery-note">
            Delivery location: {deliveryCity || "Not entered"}
          </p>
        </div>

        <div className="product-bottom">
          <span>Items in your cart</span>
          <strong>{quantity}</strong>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
