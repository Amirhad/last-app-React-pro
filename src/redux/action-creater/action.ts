import { Dispatch } from "react";
import { AlbumAction, AlbumActionTypes } from "../../types";

export const loadAlbums = () => {
  return (dispatch: Dispatch<AlbumAction>): void => {
    dispatch({ type: AlbumActionTypes.FETCH_ALBUMS });
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=38")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: AlbumActionTypes.FETCH_ALBUMS_FULFILLED,
          payload: data,
        });
      });
  };
};

export const loadPhotos = () => {
  return (dispatch: Dispatch<AlbumAction>): void => {
    dispatch({ type: AlbumActionTypes.FETCH_PHOTOS });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: AlbumActionTypes.FETCH_PHOTOS_FULFILLED,
          payload: data,
        });
      });
  };
};

export const selectId = (userId: number) => {
  return {
    type: AlbumActionTypes,
    payload: userId,
  };
};
