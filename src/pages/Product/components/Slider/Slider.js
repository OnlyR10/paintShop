import { useEffect, useState } from "react";
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
  const [imagesInSlider, setImagesInSlider] = useState([]);
  const [animation, setAnimation] = useState(false);
  const [turn, setTurn] = useState("");

  const numberScrollingSlides = 1;
  const numberImages = images.length;

  useEffect(() => {
    const numberSlidesDemonstrated = 1;
    const numberLateralSlides = 2 * numberScrollingSlides;
    const numberAllBlocksSlider =
      numberSlidesDemonstrated + numberLateralSlides;
    const halfSideSlides = (numberAllBlocksSlider - 1) / 2;

    const indexesImages = [];

    for (let i = 0; i < numberAllBlocksSlider; i += 1) {
      const indexImage = i - halfSideSlides;
      indexesImages.push(indexImage % numberImages);
    }

    setIndexSlider(indexesImages);
    setImagesInSlider(indexesImages.map((indexImage) => images.at(indexImage)));
  }, []);

  const monthTransition = (side) => {
    if (animation) return;
    setTurn(side);
    setAnimation(true);
  };

  const onAnimationStart = () => {
    if (turn === "left") {
      setIndexSlider((pages) => {
        const result = pages.map((imageIndex) => {
          return (imageIndex - numberScrollingSlides) % numberImages;
        });
        return result;
      });
    } else if (turn === "right") {
      setIndexSlider((pages) => {
        const result = pages.map((imageIndex) => {
          return (imageIndex + numberScrollingSlides) % numberImages;
        });
        return result;
      });
    }
  };

  const onAnimationEnd = () => {
    if (animation) {
      setImagesInSlider(indexSlider.map((indexImage) => images.at(indexImage)));
      setAnimation(false);
    }
  };

  return (
    <Container>
      <ArrowLeft onClick={() => monthTransition("left")} />

      <SliderWrapper>
        <Transition in={animation} timeout={0} exit={false}>
          {(state) => {
            return (
              <SliderContainer
                className={`${turn}-${state}`}
                onAnimationEnd={onAnimationEnd}
                onAnimationStart={onAnimationStart}
              >
                {imagesInSlider.map((image, index) => {
                  return (
                    <PictureContainer key={`${image}-${index}}`}>
                      <PaintPicture src={image} />
                    </PictureContainer>
                  );
                })}
              </SliderContainer>
            );
          }}
        </Transition>
      </SliderWrapper>

      <ArrowRight onClick={() => monthTransition("right")} />
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
