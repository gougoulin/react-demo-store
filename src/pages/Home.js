import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeatureRooms from "../components/FeatureRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our home
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  );
};

export default Home;
