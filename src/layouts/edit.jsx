import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Edit = () => {
  let history = useHistory();
  const [data, setData] = useState({
    name: "",
    lastname: "",
    year: "",
    link: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    name: {
      isRequired: { message: "Поле обязательно для заполнения" },
    },
    lastname: {
      isRequired: { message: "Пoле обязательно для заполнения" },
    },
    year: {
      isRequired: { message: "Пoле обязательно для заполнения" },
      isPresent: { message: "Поле 'Год рождения' не корректно" },
    },
    link: {
      isRequired: { message: "Пoле обязательно для заполнения" },
      isLink: { message: "Пoле 'Портфолио' должно быть ссылкой" },
    },
  };
  // eslint-disable-next-line
  useEffect(() => validate(), [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.removeItem("student");
    localStorage.setItem("student", JSON.stringify(data));
    history.push("/card");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">{data ? "Редактировать" : "Создать"}</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Фамилия"
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
              error={errors.lastname}
            />
            <TextField
              label="Год рождения"
              name="year"
              value={data.year}
              onChange={handleChange}
              error={errors.year}
            />
            <TextField
              label="Ссылка на портфолио"
              name="link"
              value={data.link}
              onChange={handleChange}
              error={errors.link}
            />

            {!localStorage.getItem("student") ? (
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >
                Создать
              </button>
            ) : (
              <div className="gap-2 d-md-block">
                <Link to="/" className="btn btn-primary m-2 ">
                  Назад
                </Link>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="btn btn-primary m-2 "
                >
                  Обновить
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
