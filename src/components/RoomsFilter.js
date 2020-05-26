import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pet,
    handleChange,
  } = useContext(RoomContext);

  let types = getUnique(rooms, "type");
  const typeOptions = types.map((item, indx) => {
    return (
      <option value={item} key={indx}>
        {item}
      </option>
    );
  });
  let capacities = getUnique(rooms, "capacity");
  const capacityOptions = capacities.map((item, indx) => {
    return (
      <option value={item} key={indx}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select start  */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            // value={type}
            className="form-control"
            onChange={handleChange}
          >
            <option value="">Choose a type</option>
            <option value="all">all</option>
            {typeOptions}
          </select>
        </div>
        {/* select end  */}
        {/* select guest start  */}
        <div className="form-group">
          <label htmlFor="guest">Guests</label>
          <select
            name="capacity"
            id="capacity"
            // value={type}
            className="form-control"
            onChange={handleChange}
          >
            <option value="">Choose guest number</option>
            {capacityOptions}
          </select>
        </div>
        {/* select guest end  */}
        {/**
         * price arange
         */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
          {/**
           * size
           */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="maxsize"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/**
           * end of size
           */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
