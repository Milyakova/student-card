import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const student = JSON.parse(localStorage.getItem("student"));

  const renderPhrase = (year) => {
    const age = new Date().getFullYear() - year;
    if (age % 10 === 1) {
      return ` (${age} год)`;
    } else {
      if ([2, 3, 4].some((el) => age % 10 === el)) {
        return ` (${age} года)`;
      } else {
        return ` (${age} лет)`;
      }
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Карточка студента</h5>
        <ul className="list-group">
          <li className="list-group-item">Имя: {student.name}</li>
          <li className="list-group-item">Фамилия: {student.lastname}</li>
          <li className="list-group-item">
            Год рождения: {student.year}
            <span>{renderPhrase(Number(student.year))}</span>
          </li>
          <li className="list-group-item">
            Портфолио:<a href="{student.link}"> {student.link}</a>
          </li>
        </ul>
        <Link to="/edit" className="btn btn-primary">
          Редактировать
        </Link>
      </div>
    </div>
  );
};

export default Card;
