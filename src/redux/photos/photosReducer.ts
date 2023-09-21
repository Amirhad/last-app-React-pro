import { AlbumAction, AlbumActionTypes } from "../../types";

interface initialStateType{
  photos: [] 
  loadingPhotos:boolean
}



const initialState:initialStateType = {
  photos: [],
  loadingPhotos: false,
};

export const photos = (state = initialState, action:AlbumAction) => {
  switch (action.type) {
    case AlbumActionTypes.FETCH_PHOTOS:
      return {
        ...state,
        loadingPhotos: true,
      };

      case AlbumActionTypes.FETCH_PHOTOS_FULFILLED:
        return {
        ...state,
        photos: action.payload,
        loadingPhotos: false,
      };

    default:
      return state;
  }
};
