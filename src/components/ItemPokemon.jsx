import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import poke from "../assets/pokemon.png";

const ItemPokemon = ({pokemon}) => {

  return (
      <Card className="d-block cardPokemon rounded-4 text-white d-flex flex-column gap-2 align-items-center" >
        <Card.Img className="imgPokemon" src={poke} />

        <div className="mb-3">
          <h3 className="fw-bold fs-4 mb-4">Pikachu</h3>
          <span className="py-1 px-4 rounded-2 border bg-info me-2">Water</span>
          <span className="py-1 px-4 rounded-2 border bg-info">Water</span>
        </div>
        <Link
          className="py-3 w-100 fw-medium btnMoreDetails text-decoration-none rounded-bottom-4 border-0"
          to={`/pokemon/:id`}
        >
          {" "}
          Más detalles
        </Link>
      </Card>
  );
};

export default ItemPokemon;
