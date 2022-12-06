import React from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return action.icon;
    case "DECREMENT":
      return action.icon;
    default:
      return state;
  }

  return <div></div>;
};

export default countReducer;
