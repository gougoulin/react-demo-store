import React, { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const FeatureRooms = () => {
  const { loading, featuredRooms } = useContext(RoomContext);
  const roomItems = featuredRooms.map((item) => {
    return <Room room={item} key={item.id} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? roomItems : <Loading />}
      </div>
    </section>
  );
};

export default FeatureRooms;
