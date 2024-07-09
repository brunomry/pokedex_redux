import React from "react";
import { Button } from "react-bootstrap";
import pikachu1 from "./assets/pikachu1.png";
import pokedex from "./assets/pokedex_logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container-fluid bannerHome d-flex justify-content-center px-0">
      <div className="bannerContent row gy-5 justify-content-center mt-4 mt-md-0 text-white">
        <article className="bannerDescription col-12 col-lg-6 d-flex flex-column align-items-center align-items-md-end gap-3 px-2 px-lg-5 ">
          <div className="mt-xl-5 pt-xl-5 d-flex flex-column  gap-xl-3">
            <img src={pokedex} alt="" className="img-fluid" width={200} />
            <h1 className="text-center fw-bold ">
              Sumérgete en el Mundo Pókemon
            </h1>
            <p className="text-start lead fs-4">
              ¡Busca tus pokemones favoritos!
            </p>
            <Button
              as={Link}
              to={"/pokemones"}
              className="fs-4 btnBanner border-1 border-white rounded-5 py-3"
            >
              ¡Descúbrelos aquí!
            </Button>
          </div>
        </article>
        <article className="containerImg col-12 mb-5 col-lg-6 d-flex align-items-start justify-content-center justify-content-xl-start px-0">
          <img
            src={pikachu1}
            className="imgBanner "
            alt="pikachu saludando"
            title="pikachu saludando"
          />
        </article>
      </div>
    </section>
  );
};

export default Home;
