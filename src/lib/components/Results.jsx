import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
