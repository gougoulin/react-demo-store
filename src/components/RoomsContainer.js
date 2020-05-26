import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomContext, withRoomComsumer } from "../context";
import Loading from "./Loading";

// const RoomsContainer = () => {
//   const { loading, rooms, sortedRooms } = useContext(RoomContext);
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <div>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </div>
//   );
// };

const RoomsContainer = ({ context }) => {
  const { rooms, sortedRooms } = context;
  const loading = false;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomComsumer(RoomsContainer);
