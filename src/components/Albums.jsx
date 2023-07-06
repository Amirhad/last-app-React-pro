import { useSelector } from "react-redux";

import React, { useState } from "react";
 import { useDispatch } from "react-redux";
import { selectId } from "../redux/action";


export const Albums = () => {
  const albums = useSelector((state) => state.albums.albums);
  
  const [state, indexState] = useState(null)
  const dispatch = useDispatch();
  const selectUserId = (item) => {
    dispatch(selectId(item.id));
    };
  return (
    <div className="users">
      <ul>
        {albums.map((item,index) => {
          return (
            <li className={state === index ? 'selected' : ''} onClick={() =>indexState(index)} >
            <div onClick={()=>selectUserId(item)} className="user-name">{item.id}:albums</div>
           </li>
          );
        })}
      </ul>
    </div>
  );
};
