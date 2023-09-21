import { AlbumAction, AlbumActionTypes, initialStateType } from "../../types";




const initialState:initialStateType = {
  albums: [] ,
  loadingAlbums: false,
  selectAlbumsId: null,
};

export const albums = (state = initialState, action:AlbumAction) => {
  switch (action.type) {
    case AlbumActionTypes.FETCH_ALBUMS:
      return {
        ...state,
        loadingAlbums: true,
      };

      case AlbumActionTypes.FETCH_ALBUMS_FULFILLED:
        return {
        ...state,
        loadingAlbums: false,
        albums: action.payload,
      };

    case AlbumActionTypes.FETCH_SELECT:
      return {
        ...state,
        selectAlbumsId: action.payload,
      };

    default:
      return state;
  }
};
