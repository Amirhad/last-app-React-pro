const initialState = {
  albums: [],
  loadingAlbums: false,
  selectAlbumsId: null,
};

export const albums = (state = initialState, action) => {
  switch (action.type) {
    case "load/albums/start":
      return {
        ...state,
        loadingAlbums: true,
      };

    case "load/albums/fulfilled":
      return {
        ...state,
        loadingAlbums: false,
        albums: action.payload,
      };

    case "select/albumsId":
      return {
        ...state,
        selectAlbumsId: action.payload,
      };

    default:
      return state;
  }
};
