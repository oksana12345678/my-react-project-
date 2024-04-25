import { useState, useEffect } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//     console.log("first");
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {

//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

// import { useState, useEffect } from "react";

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

const Modal = () => {
  useEffect(() => {
    // Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);

    return () => {
      // Очищаємо інтервал за його ідентифікатором
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
};

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;
