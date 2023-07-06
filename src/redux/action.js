export const loadAlbums = () => {
  return (dispatch) => {
    dispatch({ type: "load/albums/start" });
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=38")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "load/albums/fulfilled",
          payload: data,
        });
      });
  };
};

export const loadPhotos = () => {
  return (dispatch) => {
    dispatch({ type: "load/photos/start" });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "load/photos/fulfilled",
          payload: data,
        });
      });
  };
};

export const selectId = (userId) => {
    return{
        type: "select/albumsId",
        payload:userId
    }
};
