import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";


export const Albums = () => {
  const albums = useSelector((state) => state.albums.albums);

  const [state, indexState] = useState(null);

  return (
    <div className="users">
      <ul>
        {albums.map((item, index) => {
          return (
            <li
              className={state === index ? "selected" : ""}
              onClick={() => indexState(index)}
            >
              <Link to={`/${item.id}`}>
                <div className="user-name">{item.id}:albums</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
