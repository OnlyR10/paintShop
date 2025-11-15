import styled, { keyframes } from "styled-components";

// Анимация пульсации для привлечения внимания
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(227, 6, 19, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(227, 6, 19, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(227, 6, 19, 0);
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0) translateY(-2px); }
  25% { transform: translateX(-1px) translateY(-2px); }
  75% { transform: translateX(1px) translateY(-2px); }
`;

export const ViberContainer3 = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
  padding: 0 15px;
`;

export const ViberButton3 = styled.a`
  /* Основные стили в стиле сайта */
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #e30613; /* Красный как на сайте */
  color: white;
  text-decoration: none;

  /* Размеры и отступы */
  padding: 18px 35px;
  border-radius: 8px; /* Более мягкое скругление как на сайте */

  /* Текст */
  font-family: "Roboto", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  font-weight: 700; /* Жирный как на сайте */
  line-height: 1.2;
  text-transform: uppercase; /* Капс как на кнопках сайта */
  letter-spacing: 0.5px;

  /* Тени и эффекты */
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);

  /* Плавные переходы */
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  border: 2px solid #e30613;
  cursor: pointer;

  /* Анимация привлечения внимания */
  animation: ${pulse} 2s infinite;

  /* Псевдо-элемент для градиента поверх */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Hover эффекты */
  &:hover {
    background: #c80511; /* Темнее при hover как на сайте */
    border-color: #c80511;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(227, 6, 19, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
    animation: none; /* Убираем пульсацию при hover */

    &::after {
      opacity: 1;
    }
  }

  /* Активное состояние */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(227, 6, 19, 0.4), 0 1px 3px rgba(0, 0, 0, 0.15);
    background: #b0040f;
  }

  /* Focus для доступности */
  &:focus {
    outline: none;
    border-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.5),
      0 4px 12px rgba(227, 6, 19, 0.3);
  }

  /* Адаптивность */
  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 16px;
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 15px;
    gap: 8px;
  }
`;

export const ViberIcon3 = styled.span`
  font-size: 22px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  ${ViberButton3}:hover & {
    transform: scale(1.15);
  }
`;

export const ViberText3 = styled.span`
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Вариант с иконкой Viber (если нужно)
export const ViberLogo3 = styled.svg`
  width: 22px;
  height: 22px;
  fill: white;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  ${ViberButton3}:hover & {
    transform: scale(1.15);
  }
`;
