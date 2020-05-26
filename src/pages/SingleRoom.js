import React, { useContext } from "react";
import defaultImg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useLocation } from "react-router-dom";
import { getRoomBySlug, RoomContext } from "../context";

const SingleRoom = ({ match }) => {
  const { rooms } = useContext(RoomContext);
  const slug = match.params.slug;
  const room = getRoomBySlug(slug, rooms);
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found!</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pet,
    images,
  } = room;
  const [mainImg, ...restImgs] = images;
  const style = {
    minHeight: "60vh",
    background: `url(${mainImg || defaultImg}) center/cover no-repeat`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <header style={style}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </header>
      <section className="single-room">
        <div className="single-room-images">
          {restImgs.map((item, idx) => {
            return <img key={idx} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity: {capacity > 1 ? `${capacity} people` : "1 person"}
            </h6>
            <h6>{pet ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast ? "free breakfast included" : null}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, indx) => {
            return <li key={indx}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
