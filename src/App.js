import React, { useEffect, useState } from "react";
import ComponentsOne from "./components/ComponentsOne";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [show, setShow] = useState(true);

  // mounted
  useEffect(() => {
    console.log("i am mounted");
  }, []);

  // update
  useEffect(() => {
    console.log("State was updating...");
  });

  // coundition
  useEffect(() => {
    console.log("i am coundition updating...");
  }, [count]);

  // clean up
  const handleClick = () => {
    setCount((pre) => pre + 1);
  };

  // unmounted
  const handleClicker = () => {
    setCount2((pre) => pre + 2);
  };

  return (
    <div>
      {count}
      <button onClick={handleClick}>Click Me</button>
      {count2}
      <button onClick={handleClicker}>Click Me 2</button>
      {show && <ComponentsOne />}
      <button
        onClick={() => {
          setShow((pre) => !pre);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default App;

/*
  useEffect 

mounted
updating...
conditional Updating...
unmounted  
*/
