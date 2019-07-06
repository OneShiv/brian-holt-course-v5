const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me !"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "pepper",
      animal: "Dog",
      breed: "indian-dog"
    }),
    React.createElement(Pet, { name: "maggie", animal: "Cat", breed: "breeze" })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
