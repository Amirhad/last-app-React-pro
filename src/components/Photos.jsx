import { useSelector } from "react-redux";

export const Photos = () => {
  const selectAlbumsId = useSelector((state) => state.selectAlbumsId);
  const photos = useSelector((state) => state.photos);

  const filter = photos.filter((todo) => todo.albumId === selectAlbumsId);

  return (
    <div className="todos">
      <ul>
        {filter.map((item) => {
          return (
            <li>
              <img src={item.url} alt="#" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
