import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import pokedex from "../assets/pokedex_logo.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemones } from "../slices/pokemonesSlice";

const DetallePokemon = () => {
  const [pokemonObtenido, setPokemonObtenido] = useState();

  const { name } = useParams();
  console.log(name);
  const pokemones = useSelector((state) => state.pokemones.pokemones);
  const status = useSelector((state) => state.pokemones.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(obtenerPokemones());
    }
  }, []);

  useEffect(() => {
    if (status === "Exitoso") {
      obtenerPokemon();
    }
  }, [status]);

  const obtenerPokemon = () => {
    const pokemon = pokemones.find((p) => p.name === name);
    console.log(pokemon);
    setPokemonObtenido(pokemon);
  };

  return (
    <>
      <section className="py-5 section container-fluid bg-color d-flex flex-column gap-5 justify-content-start align-items-center h-100">
        <div>
          <img src={pokedex} alt="" className="img-fluid" width={200} />
        </div>
        <div className="mt-5">
          {status === "Cargando" && <p>Cargando...</p>}
          {status === "Exitoso" && pokemonObtenido && (
            <Card className="cardDetailPokemon rounded-4 text-white d-flex flex-md-row gap-5 px-2  py-5">
              <div className="imgDetailPokemon text-center d-flex flex-column  ">
                <h3 className="fw-bold fs-1 mb-4 text-white">
                  {pokemonObtenido.name}
                </h3>
                <div className="imgDetailPokemon d-flex justify-content-center">
                  <img
                    className=" "
                    src={
                      pokemonObtenido.sprites.other.dream_world.front_default
                    }
                  />
                </div>

                <div className="d-flex gap-2 justify-content-center align-items-center">
                  {pokemonObtenido.types.map((t) => (
                    <span
                      className={` rounded-2 px-3 bg-warning text-dark py-2 `}
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>

 
                <div className="mt-3">
                  <h4 className="mb-4">Habilidades</h4>
                  <div className="mb-2 d-flex flex-column w-100">
                    {
                      pokemonObtenido.stats.map(stat=>(
                        <div className="mb-2 w-100">
                            <span className="mb-2">{stat.stat.name}: {stat.base_stat}</span>
                            <div className="bg-white mt-2 w-100">a</div>
                  </div>
                      ))
                }
                </div>
                <div className="d-flex gap-3 mt-5">
                  <p>Weight: {pokemonObtenido.weight}</p>
                  <p>Height: {pokemonObtenido.height}</p>
                </div>
                </div>
            </Card>
          )}
        </div>
      </section>
    </>
  );
};

export default DetallePokemon;
