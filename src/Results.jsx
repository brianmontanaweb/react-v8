import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(({ id, name, animal, breed, images, city, state }) => (
          <Pet
            key={id}
            id={id}
            name={name}
            animal={animal}
            breed={breed}
            images={images}
            location={`${city}, ${state}`}
          ></Pet>
        ))
      )}
    </div>
  );
};

export default Results;
