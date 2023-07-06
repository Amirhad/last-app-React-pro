import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAlbums, loadPhotos } from "../redux/action";
import { Albums } from "./Albums";
import { Photos } from "./Photos";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPhotos());
  }, []);

  return (
    <div className="container">
      <Albums />
      <Photos />
    </div>
  );
};