import { useState } from "react";
import { Transition } from "react-transition-group";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  PaintPicture,
  PictureContainer,
  SliderContainer,
  SliderWrapper,
} from "./styles";

export const Slider = ({ images }) => {
  const [indexSlider, setIndexSlider] = useState([]);

  const numberSlidesDemonstrated = 1;
  const numberScrollingSlides = 1;
  const numberLateralSlides = 2 * numberScrollingSlides;
  const numberAllBlocksSlider = numberSlidesDemonstrated + numberLateralSlides;
  const centralSliderIndex = Math.floor(numberAllBlocksSlider);
  const halfSideSlides = (numberAllBlocksSlider - 1) / 2;
  const sumSideAndCenterSlide = Math.ceil(numberAllBlocksSlider / 2);

  const numberImages = images.length;

  const indexesImages = [];

  for (let i = 0; i < numberAllBlocksSlider; i += 1) {
    const indexImage = i - halfSideSlides;
    indexesImages.push(indexImage % numberImages);
  }

  const imagesInSlider = indexesImages.map((indexImage) =>
    images.at(indexImage)
  );

  const [animation, setAnimation] = useState(false);
  const [turn, setTurn] = useState("");
  const [pages, setPages] = useState([]);
  const [leftArrowLock, setLeftArrowLock] = useState(false);
  const [rightArrowLock, setRightArrowLock] = useState(false);

  const monthTransition = (side) => {
    if (animation) return;
    setTurn(side);
    setAnimation(true);
  };

  const onAnimationEnd = () => {
    if (animation) {
      if (turn === "left") {
        setPages((pages) => {
          return;
        });
      } else if (turn === "right") {
        setPages((pages) => {
          return;
        });
      }
      setAnimation(false);
    }
  };

  return (
    <Container>
      <ArrowLeft onClick={() => monthTransition("left")} lock={leftArrowLock} />

      <Transition in={animation} timeout={0} exit={false}>
        {(state) => {
          return (
            <SliderContainer>
              <SliderWrapper>
                {imagesInSlider.map((image, index) => {
                  return (
                    <PictureContainer key={`${image}-${index}}`}>
                      <PaintPicture src={image} />
                    </PictureContainer>
                  );
                })}
              </SliderWrapper>
            </SliderContainer>
          );
        }}
      </Transition>

      <ArrowRight
        onClick={() => monthTransition("right")}
        lock={rightArrowLock}
      />
    </Container>
  );
};

// if (sumSideAndCenterSlide > numberImages) {
//   indexesImages.push(images.at(indexImage % numberImages));
// } else {
//   indexesImages.push(images.at(indexImage));
// }

// if (sumSideAndCenterSlide === numberImages) {
//     indexesImages.push(images.at(i - halfSideSlides));
// }

// if (sumSideAndCenterSlide < numberImages) {
//   indexesImages.push(images.at(i - halfSideSlides));
// }
