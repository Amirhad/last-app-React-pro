const initialState = {
  albums:[],
  photos:[],

  loadingAlbums:false,
  loadingPhotos:false,

  selectAlbumsId:null

};

export const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "load/albums/start":
        return{
          ...state,
          loadingAlbums:true
        }

      case "load/albums/fulfilled":
        return{
          ...state,
          loadingAlbums:false,
          albums:action.payload
        }

        


        case "load/photos/start":
          return{
            ...state,
            loadingPhotos:true
          }
  
        case "load/photos/fulfilled":
          return{
            ...state,
            photos:action.payload,
            loadingPhotos:false
          }
  


        case "select/albumsId":
          return{
            ...state,
            selectAlbumsId:action.payload
          }

    default:
      return state;
  }
};
