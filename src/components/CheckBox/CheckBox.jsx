import { useState } from "react";

const CheckBox = ({ checked, setChange }) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          name="terms"
          onChange={(event) => {
            setChange(event.target.checked);
          }}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!checked}>
        Proceed
      </button>
    </>
  );
};
export default CheckBox;
