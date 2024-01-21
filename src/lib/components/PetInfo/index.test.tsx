import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import PetInfo, { IProps } from ".";
import { StaticRouter } from "react-router-dom/server";

const petInfoProps: IProps = {
  id: 10,
  animal: "dog",
  breed: "Unknown",
  location: "Chicago, IL",
  name: "Twig",
};

test("Displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter location={"/"}>
      <PetInfo {...petInfoProps} />
    </StaticRouter>,
  );

  const petThumbnail = (await pet.findByTestId(
    "thumbnail",
  )) as HTMLImageElement;
  expect(petThumbnail.src).toContain("none.jpg");
  pet.unmount();
});

test("Displays the first image as a thumbnail", async () => {
  const pet = render(
    <StaticRouter location={"/"}>
      <PetInfo
        {...petInfoProps}
        images={["hello.jpg", "welcome.jpg", "pet.jpg"]}
      />
    </StaticRouter>,
  );

  const petThumbnail = (await pet.findByTestId(
    "thumbnail",
  )) as HTMLImageElement;
  expect(petThumbnail.src).toContain("hello.jpg");
  pet.unmount();
});
