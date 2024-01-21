import { MouseEvent, useState } from "react";

interface IProps {
  images: string[];
}

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}: IProps) => {
  const [active, setActive] = useState(0);

  const handleImageClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.currentTarget instanceof HTMLElement)) return;
    if (event.currentTarget.dataset.index)
      setActive(+event.currentTarget.dataset.index);
  };

  return (
    <div className="carousel">
      <img className="image" src={images[active]} alt="" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <button
            className={`image ${index === active ? "active" : ""}`}
            onClick={handleImageClick}
            key={image}
            data-index={index}
          >
            <img src={image} alt="Animal Thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
