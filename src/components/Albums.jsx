import { useSelector } from "react-redux";

import { Album } from "./Album";

export const Albums = () => {
  const albums = useSelector((state) => state.albums);
  

  return (
    <div className="users">
      <ul>
        {albums.map((item) => {
          return (
            <Album item={item} />
          );
        })}
      </ul>
    </div>
  );
};
