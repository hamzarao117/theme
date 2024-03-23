// import { useState, useRef } from "react";
// export function App() {
//   const [file, setFile] = useState(null);
//   const inputRef = useRef(null);
//   const handleInputImage = () => {
//     inputRef?.current?.click();
//   };
//   return (
//     <div className="App">
//       {file ? <img src={file} /> : null}
//       <div className="form-wrapper" onClick={handleInputImage}>
//         <h1>Drop files here!</h1>
//         <input
//           type="file"
//           ref={inputRef}
//           onChange={(event) => {
//             const { target } = event || {};
//             const { files } = target || {};
//             var reader = new FileReader();
//             reader.readAsDataURL(files[0]);
//             reader.onload = function () {
//               console.log(reader.result);
//               const { result } = reader || {};
//               setFile(result);
//             };
//             reader.onerror = function (error) {
//               console.log("Error: ", error);
//             };
//             // setFile(e.target.value);
//           }}
//           style={{ display: "none" }}
//         />
//       </div>
//     </div>
//   );
// }

import { createContext, useContext, useState } from "react";

//   const [count, setCount] = useState(0);
//   const [time, setTime] = useState(3);
//   const id = useRef(null);

//   function clear() {
//     clearInterval(id.current);
//   }

//   useEffect(function () {
//     id.current = setInterval(function () {
//       setTime((t) => t - 1);
//     }, 1000);

//     return clear;
//   }, []);

//   useEffect(
//     function () {
//       if (time === 0) return clear();
//     },
//     [time]
//   );

//   return (
//     <div className="app">
//       <p>{count}</p>
//       <h1>time left:{time} sec</h1>

//       {time === 0 ? null : (
//         <button onClick={() => setCount((count) => count + 1)}>+</button>
//       )}
//     </div>
//   );

// export default App;

const App = () => {
  const ThemeContext = createContext();

  const [mode, setMode] = useState("light");

  return (
    <div className="app">
      <div className="mode">
        <ThemeContext.Provider
          value={{
            mode,
            setMode,
          }}
        >
          <Heading />
          <Buttons />
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default App;

const Heading = () => {
  const { mode } = useContext(ThemeContext);
  return <h1>Current Theme : {mode}</h1>;
};

const Buttons = () => {
  const { setMode } = useContext(ThemeContext);

  return (
    <div className="buttons">
      <button onClick={() => setMode("light")}>light</button>
      <button onClick={() => setMode("dark")}>dark</button>
    </div>
  );
};
