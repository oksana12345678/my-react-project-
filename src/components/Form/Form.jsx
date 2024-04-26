// export const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt);
//   };

import { useState } from "react";

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

const LoginForm = ({ values, onLogin, submitForm }) => {
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
  const handleChange = (evt) => {
    onLogin({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="login"
        // value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
