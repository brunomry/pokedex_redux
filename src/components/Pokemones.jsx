import React, { useEffect } from "react";
import pokedex from "../assets/pokedex_logo.png";
import { useState } from "react";
import FormFiltros from "./FormFiltros";
import ItemPokemon from "./ItemPokemon";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemones } from "../slices/pokemonesSlice";

const Pokemones = () => {
  const pokemones = useSelector((state) => state.pokemones.pokemones);
  const status = useSelector((state) => state.pokemones.status);
  const error = useSelector((state) => state.pokemones.error);

  const dispatch = useDispatch();

  const [pokemonBuscado, setPokemonBuscado] = useState("");
  const [pokemonesEncontrados, setPokemonesEncontrados] = useState([]);

  useEffect(() => {
    dispatch(obtenerPokemones());
  }, []);

  const handleChange = (e) => {
    const textInput = e.target.value;
    setPokemonBuscado(textInput);
    if (textInput.trim() === "") {
      setPokemonBuscado("");
    }
    if (textInput !== "") {
      const p = pokemones.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonBuscado.toLowerCase())
      );
      setPokemonesEncontrados(p);
    }
  };

  return (
    <section className="container-fluid bg-color px-4 px-md-0 py-5 section text-center">
      <div className="container">
        <div className="row gx-md-3 gx-lg-5">
          <article>
            <img src={pokedex} alt="" className="img-fluid" width={200} />
            <h1 className="text-white mb-5">Encuentra tu pókemon</h1>
            <form className="form container d-flex flex-column flex-sm-row justify-content-center gap-3 px-2 px-md-5">
              <div className="">
                <input
                  className="rounded-3 py-3 ps-2 "
                  type="text"
                  placeholder="ingresa el nombre de un pokemon"
                  required
                  value={pokemonBuscado}
                  onChange={handleChange}
                />
              </div>
            </form>
          </article>
          <article className=" col-md-3 col-lg-3 col-xl-2 mt-5 ">
            <div className="containerFilters">
              <h2 className="text-white ">Filtros</h2>
              <FormFiltros></FormFiltros>
            </div>
          </article>
          <article className="col-md-9 mt-5">
            <div className="row gy-5 gx-3 gx-xxl-5">
              {status === "Cargando" && (
                <p className="text-white mt-5">Cargando...</p>
              )}
              {pokemonBuscado === "" &&
                status === "Exitoso" &&
                pokemones &&
                pokemones.map((pokemon) => (
                  <article
                    key={pokemon.id}
                    className="col-md-6 col-lg-4 col-xl-3"
                  >
                    <ItemPokemon p={pokemon} />
                  </article>
                ))}
              
              {pokemonesEncontrados.length > 0 && pokemonBuscado !== "" ? (
                  pokemonesEncontrados.map((p) => (
                    <article className="col-md-6 col-lg-4 col-xl-3">
                      <ItemPokemon key={p.id} p={p} />
                    </article>
                  ))
              ) : (               
                  pokemonBuscado !== "" && (
                    <p className="text-white mt-5 text-start">No se encontró ningún Pokémon con ese nombre.</p>
                  )                             
                )
              }              
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Pokemones;
