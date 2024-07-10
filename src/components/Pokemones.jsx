import React from "react";
import pokedex from "../assets/pokedex_logo.png";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormFiltros from "./FormFiltros";
import ItemPokemon from "./ItemPokemon";

const Pokemones = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <section className="container-fluid bg-color py-5 section text-center">
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
              placeholder="Ingresa el nombre de un pokemon"
              required
            />
          </div>
          <button
            className="btnSearch btn  px-5 py-2 rounded-3 border border-warning"
            type="submit"
          >
            Buscar
          </button>
        </form>
        </article>
        <article className=" col-md-3 col-lg-2 mt-5 ">
          <div className="containerFilters">
          <h2 className="text-white ">Filtros</h2>
          <FormFiltros></FormFiltros>
          </div>
            
        </article>
        <article className="col-md-9 mt-5">
            <div className="row gy-5 gx-3 gx-xxl-5">
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
              <article className="col-md-6 col-lg-4 col-xl-3">
              <ItemPokemon></ItemPokemon>
              </article>
            </div>
           
        </article>
      
      </div>
    </div>
    
      
    </section>
  );
};

export default Pokemones;
