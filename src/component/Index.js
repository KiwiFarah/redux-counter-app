import React from "react";
import { increaseValue, decreaseValue } from "../redux/action-creator";
import { useSelector, useDispatch } from "react-redux";

function Index() {
  const myState = useSelector((state) => state.ourState.count);
  const dispatch = useDispatch();
  console.log("++++ myState ++++", myState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Redux Counter</h1>
      <button
        style={{
          backgroundColor: "green",
          fontSize: "18px",
          color: "white",
          padding: "10px 30px",
        }}
        onClick={()=>dispatch(increaseValue())}
      >
        Increment
      </button>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        {myState}
      </p>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "18px",
          padding: "10px 30px",
        }}
        onClick={()=>dispatch(decreaseValue())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Index;
