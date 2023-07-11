import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const Photos = () => {
  let  id  = parseInt( useParams().id)
  const photos = useSelector((state) => state.photos.photos);
  const filter = photos.filter((todo) => todo.albumId === id);
  if (isNaN(id)) {
    return (
      <div className="no_selected_user">
        <span>👈</span>Выберите Альбом
      </div>
    );
  }

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
