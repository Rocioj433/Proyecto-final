import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import icono from "../assets/logo-07.png"

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className='nav__left'>
        <img src={icono} alt="titulo" className="nav__icono" height='45px' />
      </div>
      <div className='nav__middle'>
          <ul className="navbar_menu">
                  <li className="navbar_item">
                    <a href="#shop">SHOP</a>
                  </li>
                  <li className="navbar_item">
                    <a href="#about">Nosotros</a>
                  </li>
                  <li className="navbar_item">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
        </div>
      <div className='nav__right'>
        <div classNameName='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
