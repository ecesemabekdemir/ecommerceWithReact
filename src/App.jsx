import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="src/assets/img/logo.svg" alt="" />
        </div>
        <div className="basketLogo">
          <button className="sepet">
            <img src="src/assets/img/sepet.svg" alt="" />
          </button>
          <button className="user">
            <img src="src/assets/img/user.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="navbar">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </div>
    </>
  );
}


function Content() {
  return (
    <div className="content">
      <div className="image">
        <img src="src/assets/img/ayakkabi.png" alt="" />
      </div>
      <div className="text">
        <h5>SNEAKER COMPANY</h5>
        <h3>Fall Limited Edition</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <h2>$125.00</h2>
        </div>
        <AddButton />
      </div>
    </div>
  );
}

function AddButton() {
  return <button className="addBtn">Add to cart</button>;
}
