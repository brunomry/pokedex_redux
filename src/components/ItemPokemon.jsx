import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import poke from "../assets/pokemon.png";
import { useSelector } from "react-redux";
import { tipos } from "../helpers/tipos";

const ItemPokemon = ({ p }) => {
  const pokemones = useSelector((state) => state.pokemones.pokemones);

  return (
    <Card className="d-block cardPokemon rounded-4 text-white d-flex flex-column gap-2 align-items-center">
      <img className="imgPokemon img-fluid" src={p.sprites.other.dream_world.front_default} />

      <div className="mb-3">
        <h3 className="fw-bold fs-3 mb-4 text-primary">{p.name}</h3>
        <div className="d-flex gap-2 justify-content-center align-items-center">
          {p.types.map((t) => (
            <span className={` rounded-2 px-3 bg-warning text-dark py-2 `}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
      <Link
        className="py-3 w-100 fw-medium btnMoreDetails text-decoration-none rounded-bottom-4 border-0"
        to={`/pokemon/${p.id}`}
      >
        {" "}
        Más detalles
      </Link>
    </Card>
  );
};

export default ItemPokemon;
