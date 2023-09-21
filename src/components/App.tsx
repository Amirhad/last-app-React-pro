import React, { useEffect } from "react";
import { Albums } from "./Albums";
import { Photos } from "./Photos";
import { Routes, Route } from "react-router-dom";
import { useTypedDispatch } from "../hooks";
import { useActions } from "../hooks/useActions";

export const App: React.FC = () => {


const {loadAlbums,loadPhotos} = useActions()

  useEffect((): void => {
    loadAlbums();
    loadPhotos();
  }, []);

  return (
    <div className="container">
      <Albums />

      <Routes>
        <Route path="/:id?" element={<Photos />} />
      </Routes>
    </div>
  );
};
