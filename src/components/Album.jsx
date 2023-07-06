// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { selectId } from "../redux/action";

// export const Album = ({ item, index }) => {
//   const [state, indexState] = useState(null)

//   const dispatch = useDispatch();

//   const selectUserId = () => {
//     dispatch(selectId(item.id));
//   };
//   return (
//     <li className={state === index ? 'selected' : ''} onClick={() =>indexState(index)} >
//       <div onClick={selectUserId} className="user-name">{item.id}:albums</div>
//     </li>
//   );
// };
