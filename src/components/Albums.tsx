import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTypedSelector } from "../hooks";



interface AlbumsInterface{
  userId: number
  id:number
  title:string
}


export const Albums:React.FC = () => {
  // @ts-ignore
  const albums = useTypedSelector((state) => state.albums.albums);

console.log(albums);

  const [state, indexState] = useState(null);


  return (
    <div className="users">
      <ul>
        {albums.map((item:AlbumsInterface, index:any) => {
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
