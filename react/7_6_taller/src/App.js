import logo from "./logo.svg";
import "./App.css";
import Perfil from "./components/Perfil.jsx";
import Icon from "./components/Icon.jsx";
import { useState, useEffect } from "react";

const icons = [
  {
    description: "Hola, este es mi nombre",
    info: "name",
    d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z",
  },
  {
    description: "Hola, este es mi correo electrónico",
    info: "email",
    d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
  },
  {
    description: "Hola, esta es mi fecha de nacimiento",
    info: "birdthday",
    d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z",
  },
  {
    description: "Hola, esta es mi ubicacion",
    info: "location",
    d: "M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z",
  },
  {
    description: "Hola, este es mi número de telefono",
    info: "phone",
    d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
  },
  {
    description: "Hola, este es mi contraña",
    info: "password",
    d: "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z",
  },
];

function App() {
  const [perfilInfo, setPerfilInfo] = useState({
    description: "Hola!!!",
    info: "Información aqui",
  });

  const [data, setData] = useState({});

  const [counter, setCounter] = useState(0);

  const { description, info } = perfilInfo;

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const d = new Date(data.results[0].dob.date);

        const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

        setData({
          picture: data.results[0].picture.large,
          name: `${data.results[0].name.first} ${data.results[0].name.last}`,
          email: data.results[0].email,
          birdthday: date,
          location: `${data.results[0].location.city}, ${data.results[0].location.country}`,
          phone: data.results[0].phone,
          password: data.results[0].login.password,
        });
      });
  }, []);

  return (
    <>
      <div className="main-container">
        <h1>RANDOM USER GENERATOR</h1>
        <h2>
          Descubre personas random de forma rapida, usando la api pública{" "}
          <a href="https://randomuser.me/api/">random user</a>{" "}
        </h2>
      </div>
      <div className="App">
        <div className="perfil-container"></div>
        <Perfil description={description} info={info} data={data} />
        {icons.map((icon, index) => {
          return (
            <Icon setPerfilInfo={setPerfilInfo} key={index} iconObj={icon} />
          );
        })}
      </div>
    </>
  );
}

export default App;
