const initialState = {
  photos: [],
  loadingPhotos: false,
};

export const photos = (state = initialState, action) => {
  switch (action.type) {
    case "load/photos/start":
      return {
        ...state,
        loadingPhotos: true,
      };

    case "load/photos/fulfilled":
      return {
        ...state,
        photos: action.payload,
        loadingPhotos: false,
      };

    default:
      return state;
  }
};
