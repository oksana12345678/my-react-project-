import Product from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </div>
//   );
// }

// const foodStyle = {
//   backgroundColor: "gray",
//   marginTop: 20,
//   borderRadius: 10,
//   textAlign: "center",
//   color: "white",
// };
// const headerStyle = {
//   backgroundColor: "#fafafa",
//   color: "black",
//   borderRadius: 10,
// };
// export default function App() {
//   return (
//     <div style={foodStyle}>
//       <h1 style={headerStyle}>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }
// src/components/App.jsx

// import { Alert } from "./Alert";
import { useState } from "react";
import LoginForm from "./Form/Form";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import Coffee from "./Coffee/Coffee";
import CheckBox from "./CheckBox/CheckBox";

export const App = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(values);
    setValues({
      login: "",
      password: "",
    });
  };
  const [lang, setLang] = useState("uk");

  const [coffeeSize, setCoffeeSize] = useState("sm");

  const [hasAccepted, setHasAccepted] = useState(" ");

  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm
        onLogin={setValues}
        values={values}
        submitForm={handleSubmit}
      />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <Coffee checked={setCoffeeSize} />
      <p>Selected language: {coffeeSize}</p>
      <CheckBox checked={hasAccepted} setChange={setHasAccepted} />
    </div>
  );
};
