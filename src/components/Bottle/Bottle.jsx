import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle)
  const {name, img, price} = bottle;

  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>Price: ${price}</p>
      <button className='button' onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;
