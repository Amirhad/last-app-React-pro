import React from "react";
import { useDispatch } from "react-redux";
import { selectId } from "../redux/action";

export const Album = ({ item }) => {

  const dispatch = useDispatch();

  const selectUserId = () => {
    dispatch(selectId(item.id));
  };
  return (
    <li onClick={selectUserId}>
      <div className="user-name">{item.id}:albums</div>
    </li>
  );
};
