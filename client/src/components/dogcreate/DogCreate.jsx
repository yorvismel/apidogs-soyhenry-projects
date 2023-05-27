import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperaments } from "../../redux/actions/actions";
import { validate } from "./Validate";
import "./DogCreate.css";

export default function CreateDog() {
  const dispatch = useDispatch();

  const history = useHistory();

  const allTemperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    lifeTime: 0,
    image: "",
    temperament: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleSelect = (e) => {
    if (!input.temperament.includes(e.target.value)) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  };

  console.log(handleSelect);

  // ALERT

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postDog(input));

    const alerta = document.createElement("div");
    alerta.textContent = "¡The dog was created!";
    alerta.classList.add("alerta");
    document.body.appendChild(alerta);

    setInput({
      name: "",
      height_min: 0,
      height_max: 0,
      weight_min: 0,
      weight_max: 0,
      lifeTime: 0,
      temperament: [],
    });
    history.push("/home");

    // Cerrar la alerta después de 2 segundos
    setTimeout(() => {
      alerta.remove();
    }, 2000);
  };

  const handleErase = (e) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((d) => d !== e),
    });
  };

  return (
    <div className="create-container">
      <div className="title">
        <Link to="/home">
          <button className="btn">HOME</button>
        </Link>

        <h2>CREATE DOG</h2>
      </div>

      <div>
        <form className="formStyle" onSubmit={(e) => handleSubmit(e)}>
          <div className="items">
            <h3>NAME:</h3>
            <input
              required
              className="numInput"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <h2 className="tex-err">{errors.name && <p> {errors.name} </p>}</h2>
          </div>

          <div className="items">
            <h3>MIN HEIGHT:</h3>
            <input
              min="0"
              className="numInput"
              type="number"
              value={input.height_min}
              name="height_min"
              onChange={(e) => handleChange(e)}
            />
            <h2 className="tex-err">
              {errors.height_min && <p> {errors.height_min} </p>}
            </h2>
            <h2 className="tex-err">
              {errors.especial1 && <p> {errors.especial1} </p>}
            </h2>
          </div>

          <div className="items">
            <h3>MAX HEIGHT:</h3>
            <input
              min="0"
              className="numInput"
              type="number"
              value={input.height_max}
              name="height_max"
              onChange={(e) => handleChange(e)}
            />
            <h2 className="tex-err">
              {errors.height_max && <p> {errors.height_max} </p>}
            </h2>
          </div>

          <div className="items">
            <h3>MIN WEIGHT: </h3>
            <input
              min="0"
              className="numInput"
              type="number"
              value={input.weight_min}
              name="weight_min"
              onChange={(e) => handleChange(e)}
            />

            <h2 className="tex-err">
              {errors.weight_min && <p> {errors.weight_min} </p>}
            </h2>
            <h2 className="tex-err">
              {errors.especial2 && <p> {errors.especial2} </p>}
            </h2>
          </div>

          <div className="items">
            <h3>MAX WEIGHT: </h3>
            <input
              min="0"
              className="numInput"
              type="number"
              value={input.weight_max}
              name="weight_max"
              onChange={(e) => handleChange(e)}
            />
            <div className="probando">
              <h2 className="tex-err">
                {errors.weight_max && <p> {errors.weight_max} </p>}
              </h2>
            </div>
          </div>

          <div className="items">
            <h3>LIFE SPAN:</h3>
            <input
              min="0"
              className="numInput"
              type="number"
              value={input.lifeTime}
              name="lifeTime"
              onChange={(e) => handleChange(e)}
            />
            <h2 className="tex-err">
              {errors.lifeTime && <p> {errors.lifeTime} </p>}
            </h2>
          </div>
          <div></div>
          <div className="items">
            <h3>TEMPERAMENTS</h3>
            <select className="numInput" onChange={handleSelect}>
              <option value="all" disabled selected defaultValue>
                prototemperament
              </option>
              {allTemperaments.map((e) => {
                return (
                  <option value={e.name} key={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <h2 className="tex-err">
              {errors.temperament && <p> {errors.temperament} </p>}
            </h2>
          </div>

          {errors && !input.temperament.length ? (
            <div className="btnh2">Debe seleccionar Temperamento</div>
          ) : (
            <button className="btn" type="submit">
              CREATE
            </button>
          )}
        </form>

        <div className="mooDiv">
          {input.temperament.map((d, i) => {
            return (
              <div key={i++}>
                <div className="btn3"> {d} </div>
                <button className="eraerbtn" onClick={() => handleErase(d)}>
                  X
                </button>
              </div>
            );
          })}
        </div>

        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
