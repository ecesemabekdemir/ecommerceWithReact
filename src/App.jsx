import { useState } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState(0);
  const [product, setProduct] = useState(null);
  console.log(product);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className="body">
        <Slider />
        <div className="general">
          <Content unit={unit} setProduct={setProduct} setUnit={setUnit} />
        </div>
      </div>
      <InBasket
        product={product}
        open={open}
        setOpen={setOpen}
        setProduct={setProduct}
      />
    </>
  );
}

function Header({ open, setOpen  }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toogleMenu = () => {setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
            <img src="./img/logo.svg" alt="" />
        </div>
        <div className="basketLogo">
          <button onClick={() => setOpen(true)} className="sepet">
            <img src="./img/sepet.svg" alt="" />
          </button>
          <button className="user">
            <img src="./img/user.svg" alt="" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="overlay" onClick={toogleMenu}></div>
          <div>
            <ul className={`menu ${menuOpen ? "open" : ""}`}>
              <button className="close-menu" onClick={toogleMenu}>
                X
              </button>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

function Slider() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="slider" onClick={() => setOpen(true)}>
        <img src="./img/ayakkabi.png" alt="" />
      </div>
      <SliderModal open={open} setOpen={setOpen} />
    </>
  );
}

function SliderModal({ open, setOpen }) {
  const [index, setIndex] = useState(1);
  let image = [1, 2, 3, 4];
  return (
    <>
      {open && <div className="overlayDialog"></div>}
      <dialog className="diaolog" open={open}>
        <button className="modalClose" onClick={() => setOpen(false)}>
          X
        </button>
        <div className="productModal">
          <button
            className=""
            onClick={() =>
              index - 1 === 0 ? setIndex(1) : setIndex(index - 1)
            }
          >
            <img src="./img/solOk.svg" alt="solOk" />
          </button>
          <img src={`./img/ayakkabı${index}.png`} alt="" />
          <button
            onClick={() =>
              index + 1 === 5 ? setIndex(1) : setIndex(index + 1)
            }
          >
            <img src="./img/sagOk.svg" alt="" />
          </button>
          <div className="thumbnail">
            {image.map((x) => (
              <img
                src={`./img/ayakkabı${index}.png`}
                alt=""
                key={x}
                className={` ${index === x ? "hoverImg" : ""}`}
              />
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}

function SelectProduct({ unit, setUnit }) {
  return (
    <div className="select">
      <button onClick={() => (unit - 1 < 0 ? setUnit(0) : setUnit(unit - 1))}>
        -
      </button>
      <p>{unit}</p>
      <button onClick={() => unit + 1 <= 10 && setUnit(unit + 1)}> + </button>
    </div>
  );
}

function Content({ unit, setUnit, setProduct }) {
  return (
    <>
      <div className="content">
        <div className="text">
          <h5>SNEAKER COMPANY</h5>
          <h3>Fall Limited Edition</h3>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <Price />
        </div>
      </div>
      <div className="addBasket">
        <SelectProduct unit={unit} setUnit={setUnit} />
        <AddButton unit={unit} setProduct={setProduct} />
      </div>
    </>
  );
}

function Price() {
  return (
    <div className="price">
      <div className="discount">
        <h3>$125.00</h3>
        <h5>50%</h5>
      </div>
      <h6>$250.00</h6>
    </div>
  );
}

function AddButton({ unit, setProduct }) {
  function addToCard() {
    setProduct({
      id: 1,
      title: "Fall Limited Edition Sneakers",
      image: "./img/slider1.png",
      price: 125,
      unit: unit,
    });
  }
  return (
    <button className="addBtn" onClick={() => addToCard()}>
      Add to cart
    </button>
  );
}

function InBasket({ product, open, setOpen, setProduct }) {
  return (
    <dialog className="inBasket" open={open}>
      <button onClick={() => setOpen(false)}>X</button>

      <h4>Cart</h4>
      <div className="content">
        {product != null ? (
          <>
            <div className="contentImg">
              <img src={product.image} alt="" />
            </div>
            <div className="contentText">
              <p>{product.title}</p>
              <div className="calc">
                <p>{product.price}$ x</p>
                <p>{product.unit}</p>
                <h4>${product.unit * product.price}</h4>
                <button
                  onClick={() => {
                    setProduct(null);
                    setOpen(false);
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Your cart is empty.</h2>
          </>
        )}
      </div>

      <button className="check">Checkout</button>
    </dialog>
  );
}
