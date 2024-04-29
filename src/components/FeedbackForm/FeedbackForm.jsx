// export const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt);
//   };

// import { useState } from "react";

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     onLogin({
//       login: login.value,
//       password: password.value,
//     });
//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// import { useId } from "react";

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const LoginForm = ({ values, onLogin, submitForm }) => {
// const handleLoginChange = (evt) => {
//   setValues({
//     ...values,
//     login: evt.target.value,
//   });
// };

// const handlePwdChange = (evt) => {
//   setValues({
//     ...values,
//     password: evt.target.value,
//   });
// };
//   const handleChange = (evt) => {
//     onLogin({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <input
//         type="text"
//         name="login"
//         // value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
import css from "./FeedbackForm.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};
const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.formItem}
            type="text"
            name="username"
            id="nameFieldId"
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.formItem}
            type="email"
            name="email"
            id="emailFieldId"
          />{" "}
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field
            className={css.formItem}
            as="textarea"
            name="message"
            placeholder="comment"
            id="msgFieldId"
          />{" "}
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field
            className={css.formItem}
            as="select"
            name="level"
            id={levelFieldId}
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage className={css.error} name="level" component="span" />
        </div>
        <button className={css.buttonSubmit} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default FeedbackForm;
