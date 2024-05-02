import { useState, useEffect } from "react";
import LoginForm from "./FeedbackForm/FeedbackForm";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import Coffee from "./Coffee/Coffee";
import CheckBox from "./CheckBox/CheckBox";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import ArticlesList from "./ArticlesList/ArticlesList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );

        setArticles(response.data.hits);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);
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
      <h1>Latest articles </h1>
      {loading && (
        <p>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </p>
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticlesList items={articles} />}
      <h2>Please login to your account!</h2>
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
