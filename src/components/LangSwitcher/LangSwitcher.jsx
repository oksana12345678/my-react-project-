import { useId } from "react";
import PropTypes from "prop-types";

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={(event) => {
//           onSelect(event.target.value);
//         }}
//       >
//         <option value={"uk"}>Ukrainian</option>
//         <option value={"en"}>English</option>
//         <option value={"pl"}>Polish</option>
//       </select>
//     </div>
//   );
// };

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
LangSwitcher.propTypes = {
  onSelect: PropTypes.func,
};

export default LangSwitcher;
