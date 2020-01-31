import React from "react";

const initialState = {
  val: true
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      val: !state.val
    };
  } else {
    return state;
  }
};
export default reducer;
