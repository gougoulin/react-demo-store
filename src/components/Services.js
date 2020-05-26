import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [service, setService] = useState([
    {
      id: 1,
      icon: <FaCocktail />,
      title: "free cocktail",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur unde labore dolores amet quibusdam, corporis expedita reiciendis. Eligendi nisi commodi necessitatibus velit provident maxime temporibus saepe harum mollitia quo.",
    },
    {
      id: 2,
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur unde labore dolores amet quibusdam, corporis expedita reiciendis. Eligendi nisi commodi necessitatibus velit provident maxime temporibus saepe harum mollitia quo.",
    },
    {
      id: 3,
      icon: <FaShuttleVan />,
      title: "free cocktail",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur unde labore dolores amet quibusdam, corporis expedita reiciendis. Eligendi nisi commodi necessitatibus velit provident maxime temporibus saepe harum mollitia quo.",
    },
    {
      id: 4,
      icon: <FaBeer />,
      title: "Strongest beer",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur unde labore dolores amet quibusdam, corporis expedita reiciendis. Eligendi nisi commodi necessitatibus velit provident maxime temporibus saepe harum mollitia quo.",
    },
  ]);
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {service.map((item) => {
          return (
            <article key={item.id} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
