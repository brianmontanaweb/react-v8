import { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  const handleImageClick = (index) => setActive(index);

  return (
    <div className="carousel">
      <img src={images[active]} alt="" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            onClick={() => handleImageClick(index)}
            key={image}
            src={image}
            className={`image ${index === active ? "active" : ""}`}
            alt="Animal Thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
