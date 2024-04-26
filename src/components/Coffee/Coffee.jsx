import PropTypes from "prop-types";

const Coffee = ({ checked }) => {
  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value={"sm"}
          onChange={(event) => {
            checked(event.target.value);
          }}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value={"md"}
          onChange={(event) => {
            checked(event.target.value);
          }}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value={"lg"}
          onChange={(event) => {
            checked(event.target.value);
          }}
        />
        Large
      </label>
    </>
  );
};

Coffee.propTypes = {
  checked: PropTypes.func.isRequired,
};

export default Coffee;
