import React, { createContext, useState, useEffect } from "react";
// import items from "./data";
import Client from "./Contentful";

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [data, setData] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });
  /**
   * get data from Contentful
   */
  const getData = async () => {
    try {
      const res = await Client.getEntries({
        content_type: "beachResortRooms",
      });
      const items = res.items;
      const rooms = items.map((item) => {
        const id = item.sys.id;
        const images = item.fields.images.map((image) => image.fields.file.url);
        const room = { ...item.fields, images, id };
        return room;
      });
      console.log(rooms);
      const maxPrice = Math.max(...rooms.map((item) => item.price));
      const maxSize = Math.max(...rooms.map((item) => item.size));
      const featuredRooms = rooms.filter((room) => room.featured);
      setData((prev) => {
        return {
          ...prev,
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          maxPrice,
          maxSize,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * useEffect hook
   */
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const eType = e.target.type;
    const value = eType === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setData((prev) => {
      const newData = { ...prev, [name]: value };
      const {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets,
      } = newData;
      console.log(newData);
      const sortedRooms = rooms.filter((item) => {
        return (
          (type == "all" ? true : item.type == type) &&
          (capacity == "" ? true : item.capacity >= capacity) &&
          item.price >= price &&
          item.size >= minSize &&
          item.size <= maxSize &&
          (breakfast ? item.breakfast == true : true) &&
          (pets ? item.pets == true : true)
        );
      });
      return { ...newData, sortedRooms };
    });
  };

  return (
    <RoomContext.Provider value={{ ...data, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
};

const getRoomBySlug = (slug, rooms) => {
  return rooms.find((room) => room.slug === slug);
};

const RoomComsumer = RoomContext.Consumer;
function withRoomComsumer(Component) {
  return function (props) {
    return (
      <RoomComsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomComsumer>
    );
  };
}

export { RoomContext, RoomProvider, getRoomBySlug, withRoomComsumer };
