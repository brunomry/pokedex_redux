import React from "react";
import poke from "../assets/pokemon.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import pokedex from "../assets/pokedex_logo.png";

const DetallePokemon = () => {
  return (
    <>
      <section className="py-5 section container-fluid bg-color d-flex flex-column gap-5 justify-content-start align-items-center h-100">
        <div>
          <img src={pokedex} alt="" className="img-fluid" width={200} />
        </div>
        <div className="mt-5">
          <Card className="cardDetailPokemon rounded-4 text-white d-flex flex-md-row gap-5 px-2  py-5">
            <div className="imgDetailPokemon text-center d-flex flex-column  ">
              <h3 className="fw-bold fs-1 mb-4">Pikachu</h3>
              <div className="imgDetailPokemon d-flex justify-content-center">
                <Card.Img className="" src={poke} />
              </div>

              <div className="mt-3">
                <span className="py-1 px-4 rounded-2 border bg-info me-2">
                  Water
                </span>
                <span className="py-1 px-4 rounded-2 border bg-info">
                  Water
                </span>
              </div>
            </div>

            <div className="mb-3">
              <div className="mt-3">
                <h4 className="mb-4">Habilidades</h4>
                <div className="mb-2 d-flex gap-3 w-100">
                  <span>HP</span>
                  <span>49</span>
                  <div className=""></div>
                </div>
                <div className="mb-2">
                  <span>Ataque</span>
                  <span>49</span>
                  <div></div>
                </div>
                <div className="mb-2">
                  <span>Defensa</span>
                  <span>49</span>
                  <div></div>
                </div>
                <div className="mb-2">
                  <span>Ataque especial</span>
                  <span>49</span>
                  <div></div>
                </div>
                <div className="mb-2">
                  <span>Defensa especial</span>
                  <span>49</span>
                  <div></div>
                </div>
                <div className="mb-2">
                  <span>Velocidad</span>
                  <span>49</span>
                  <div></div>
                </div>
              </div>
              <div className="d-flex gap-3 mt-5">
                <p>Weight: 00</p>
                <p>Height: 00</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default DetallePokemon;
