const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt ME!"),
    React.createElement(Pet, { name: "Twig", animal: "Dog", breed: "Unknown" }),
    React.createElement(Pet, {
      name: "Kiedis",
      animal: "Dog",
      breed: "Pomapoo",
    }),
    React.createElement(Pet, {
      name: "Tiger",
      animal: "Cat",
      breed: "Unknown",
    }),
  ]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
