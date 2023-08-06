import React, { useReducer, useEffect } from "react";
import { validate } from "../utils/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouch: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouch: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandle = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandle = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandle}
        onBlur={touchHandle}
        value={inputState.value}
        className={`text-slate-700 py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium ${!inputState.isValid && inputState.isTouch && "bg-slate-300"}`} 
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 4}
        onChange={changeHandle}
        onBlur={touchHandle}
        value={inputState.value}
        placeholder={props.placeholder}
        className={`text-slate-700 py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium ${!inputState.isValid && inputState.isTouch && "bg-slate-300"}`} 
      ></textarea>
    );
  return (
    <label
      className={`flex flex-col w-[30%] min-w-[380px] ${
        !inputState.isValid && inputState.isTouch && "text-red-6--"
      }`}
    >
      <span className="text-white font-medium mb-4">{props.label}</span>
      {element}
      {!inputState.isValid && inputState.isTouch && (
        <p className="text-red-600">{props.errorText}</p>
      )}
    </label>
  );
};

export default Input;
