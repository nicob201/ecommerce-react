import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };

  const infoFormUser = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={infoFormUser}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={infoFormUser}
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          onChange={infoFormUser}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
