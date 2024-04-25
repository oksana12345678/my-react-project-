// src/components/Product.jsx
import PropTypes from "prop-types";
// export const Product = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.imgUrl} alt={props.name} width="480" />
//       <p>Price: {props.price} credits</p>
//     </div>
//   );
// };

export const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
export default Product;
