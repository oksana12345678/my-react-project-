
import clsx from "clsx";
import css from "./Alert.module.css";

console.log(css); // { alert: "Alert_alert_ax7yz" }

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};
import { HiUser } from "react-icons/hi";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" /> {name}
      </p>
    </div>
  );
};
// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };
// // Button.jsx
// const Button = ({ variant, children }) => {
//   // Базові стилі кнопки з кількома варіантами відображення
//   return <button className={clsx("button", variant)}>{children}</button>;
// };

// // LoginButton.jsx
// const LoginButton = () => {
//   // Унікальна логіка кнопки логіна
//   return <Button variant="primary">Login</Button>;
// };

// // FollowButton.jsx
// const FollowButton = () => {
//   // Унікальна логіка кнопки підписки
//   return <Button variant="secondary">Follow</Button>;
// };
