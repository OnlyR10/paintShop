import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  PictureContainer,
  SliderContainer,
  SliderWrapper,
} from "./styles";

export const Slider = ({ images }) => {
  const nodeRef = useRef(null);

  const [indexSlider, setIndexSlider] = useState([]);
  const [animation, setAnimation] = useState(false);
  const [turn, setTurn] = useState("");

  const numberScrollingSlides = 1;
  const numberImages = images.length;

  const monthTransition = (side) => {
    if (animation) return;
    setTurn(side);
    setAnimation(true);
  };

  const onAnimationEnd = () => {
    if (animation) {
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
      setAnimation(false);
    }
  };

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
  }, []);

  return (
    <Container>
      <ArrowLeft onClick={() => monthTransition("left")} />

      <SliderWrapper>
        <Transition in={animation} timeout={0} exit={false} nodeRef={nodeRef}>
          {(state) => {
            return (
              <SliderContainer
                className={`${turn}-${state}`}
                onAnimationEnd={onAnimationEnd}
                ref={nodeRef}
              >
                {indexSlider
                  .map((indexImage) => images.at(indexImage))
                  .map((image, index) => {
                    return (
                      <PictureContainer
                        key={`${image}-${index}}`}
                        src={image}
                      ></PictureContainer>
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
