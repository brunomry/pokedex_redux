import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { obtenerTipos } from "../slices/pokemonesSlice";

const FormFiltros = () => {
  const tipos = useSelector((state) => state.pokemones.tipos);
  const status = useSelector((state) => state.pokemones.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerTipos());
  }, []);

  return (
    <Form className="mt-3 filtros row  rounded-3 py-3">
      {status === "Exitoso" &&
        tipos.results.map((tipo) => (
          <Form.Group
            key={tipo.name}
            className="mb-2 d-flex col-4 col-sm-3 col-md-6 col-lg-5"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label={tipo.name} className="" />
          </Form.Group>
        ))}
    </Form>
  );
};

export default FormFiltros;
