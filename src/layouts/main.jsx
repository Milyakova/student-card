import React from "react";
import Card from "../components/card";
import { Link } from "react-router-dom";
import "bootstrap";

const Main = () => {
  const student = JSON.parse(localStorage.getItem("student"));
  return (
    <>
      {student && <Card />}
      {!student && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Карточка студента</h5>
            <p>Нет данных</p>
            <Link to="/edit" className="btn btn-primary m-2">
              Добавить
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
