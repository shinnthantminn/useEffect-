import React, { useEffect } from "react";

const ComponentsOne = () => {
  useEffect(() => {
    console.log("components One Mounted");
    return () => {
      console.log("Commponents One Was UnMounted");
    };
  }, []);

  return <div>ComponentsOne</div>;
};

export default ComponentsOne;
