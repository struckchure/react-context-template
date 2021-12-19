import React, { useContext } from "react";
import { Context } from "../context";

export default function Test() {
  const { state, actions, dispatch } = useContext(Context);

  const { text } = state.auth;
  const { is_loading } = state.common;

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          actions.auth.changeText(e.target.value)(dispatch);
        }}
      />
      <p>{text}</p>
      <button
        className={`${
          is_loading ? "bg-red-600" : "bg-blue-700"
        } text-white p-2`}
        onClick={() => {
          actions.common.setLoading(!is_loading)(dispatch);
        }}
      >
        Toggle test
      </button>
    </div>
  );
}
