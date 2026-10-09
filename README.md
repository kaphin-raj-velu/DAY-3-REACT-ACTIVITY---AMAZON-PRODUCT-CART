# Amazon Product Cart – React Day 3 Activity

A responsive Amazon-inspired product cart application built using React. This project demonstrates React components, props, state management, event handling, controlled components, conditional rendering, and the `useEffect` hook.

## 🚀 Features

- **Reusable Components:** Organized into `Header`, `ProductCard`, and `Footer`.
- **Props:** Pass product details, quantity, selected colour, and delivery city from the parent component to the product component.
- **State Management:** Manage cart quantity, product colour, delivery city, and product visibility using React's `useState` hook.
- **Add to Cart:** Increase the cart quantity.
- **Remove One:** Decrease the quantity without allowing it to fall below zero.
- **Reset Cart:** Reset the cart quantity to zero.
- **Show/Hide Product:** Conditionally display or hide the product card while preserving the cart state.
- **Product Customization:** Select a product colour using interactive colour options.
- **Delivery City:** Enter and update the delivery city using a controlled input.
- **Cart Summary:** Display the selected product quantity, total amount, and cart status.
- **Dynamic Browser Title:** Update the browser tab title based on the product name, selected colour, and cart quantity using `useEffect`.
- **Responsive UI:** A clean, card-based layout designed for desktop and mobile screens.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- React Hooks: `useState` and `useEffect`

## 📁 Project Structure

```text
amazon-product-cart/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── Footer.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following on your computer:

- Node.js
- npm

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### Step 2: Open the project folder

```bash
cd amazon-product-cart
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

### Step 5: Open the application

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## 🧠 React Concepts Explained

### 1. Components

The application is divided into reusable components:

- `Header.jsx` – Displays the application header.
- `ProductCard.jsx` – Displays product details and customization options.
- `Footer.jsx` – Displays footer information.
- `App.jsx` – Manages application state and combines the components.

### 2. Props

Props pass information from the parent component (`App.jsx`) to the child component (`ProductCard.jsx`).

Examples include:

- `productName`
- `price`
- `quantity`
- `selectedColor`
- `deliveryCity`

### 3. useState Hook

The `useState` hook stores and updates application data.

```jsx
const [quantity, setQuantity] = useState(0);
const [selectedColor, setSelectedColor] = useState("Black");
const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
const [showProduct, setShowProduct] = useState(true);
```

### 4. Event Handling

Button clicks and user input trigger functions that update the application state. For example, the Add to Cart button increases the quantity.

### 5. Controlled Components

The colour selector and delivery city input use React state to maintain their current values.

### 6. Conditional Rendering

The `showProduct` state determines whether the product card is displayed. Hiding the product card does not reset the cart quantity.

### 7. useEffect Hook

The `useEffect` hook updates the browser tab title whenever the product name, selected colour, or quantity changes.

It also includes a cleanup function to restore the previous browser title when the product component unmounts.

## 💰 Cart Calculation

The total amount is calculated using:

**Total Amount = Product Price × Quantity**

For example, if the product price is ₹499 and the cart quantity is 2:

```text
₹499 × 2 = ₹998
```

The total amount updates automatically when the quantity changes.

## 🎯 Learning Outcomes

By completing this activity, you will learn how to:

- Create and reuse React components.
- Pass data between components using props.
- Manage state using `useState`.
- Handle user interactions and events.
- Build controlled input elements.
- Implement conditional rendering.
- Use `useEffect` with dependencies and cleanup.
- Create a responsive user interface using CSS.


---

*Developed as part of the React Day 3 learning activity.*
