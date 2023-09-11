import PropTypes from 'prop-types';
import './Cart.css'
import '../Bottle/Bottle.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id} className='cart-bottle'>
            <img src={bottle.img}></img>
            <h4>{bottle.name}</h4>
            <button className='button' onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;