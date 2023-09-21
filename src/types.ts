export interface initialStateType {
  albums: any[];
  loadingAlbums: Boolean;
  selectAlbumsId: null;
}

export enum AlbumActionTypes {
  FETCH_ALBUMS = "load/albums/start",
  FETCH_ALBUMS_FULFILLED = "load/albums/fulfilled",

  FETCH_PHOTOS = "load/photos/start",
  FETCH_PHOTOS_FULFILLED = "load/photos/fulfilled",


  FETCH_SELECT = "select/albumsId"
}

interface FetchAlbumAction {
  type: AlbumActionTypes.FETCH_ALBUMS;
}

interface FetchAlbumFulfilledAction {
  type: AlbumActionTypes.FETCH_ALBUMS_FULFILLED;
  payload: any[];
}

interface FetchPhotosAction {
  type: AlbumActionTypes.FETCH_PHOTOS;
}

interface FetchPhotosFulfilledAction {
  type: AlbumActionTypes.FETCH_PHOTOS_FULFILLED;
  payload: any[];
}

interface FetchSelectAction {
    type: AlbumActionTypes.FETCH_SELECT;
    payload: any[];

  }

export type AlbumAction =
  | FetchAlbumAction
  | FetchAlbumFulfilledAction
  | FetchPhotosAction
  | FetchPhotosFulfilledAction
  | FetchSelectAction
