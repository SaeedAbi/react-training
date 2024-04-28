import React from "react";
import "../../index.css";
import Pizza from "../../Hooks/pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main>
      <h2 className="menu header">Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p className={"pb-12"}>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven,all organic ,all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later:)</p>
      )}

      {/*<Pizza*/}
      {/*  name="Pizza Spinac"*/}
      {/*  ingredient="Tomato, mozarella, spinach, and ricotta cheese"*/}
      {/*  photoName="pizzas/spinaci.jpg "*/}
      {/*  price={10}*/}
      {/*/>*/}
      {/*<Pizza*/}
      {/*  name="Pizza Funghi"*/}
      {/*  ingredient="Tomato, mozarella, mushrooms, and onion"*/}
      {/*  photoName="pizzas/funghi.jpg "*/}
      {/*  price={12}*/}
      {/*/>*/}
    </main>
  );
};

export default Menu;
