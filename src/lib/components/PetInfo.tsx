import { Link } from "react-router-dom";
import { Animal } from "../models/APIResponses.types";

interface IProps {
  id: number;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  name: string;
}

const PetInfo = (props: IProps) => {
  const { name, animal, breed, images, location, id } = props;
  let heroImageUrl = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    heroImageUrl = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          paddingTop: "100%",
        }}
      />
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2 font-bold">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default PetInfo;
