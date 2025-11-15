import styled, { keyframes } from "styled-components";

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shine = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

// Styled Components
export const ViberContainer2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const ViberButton2 = styled.a`
  /* Основные стили */
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  text-decoration: none;

  /* Размеры и отступы */
  padding: 16px 32px;
  border-radius: 50px;

  /* Текст */
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;

  /* Тени и эффекты */
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);

  /* Плавные переходы */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;

  /* Анимация появления */
  animation: ${fadeInUp} 0.6s ease-out;

  /* Псевдо-элемент для блеска */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }

  /* Hover эффекты */
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4),
      0 3px 10px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #7c3aed, #6d28d9);

    &::before {
      left: 100%;
    }
  }

  /* Active состояние */
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 10px rgba(139, 92, 246, 0.4), 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
  }

  /* Focus для доступности */
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3),
      0 4px 15px rgba(139, 92, 246, 0.3);
  }

  /* Адаптивность */
  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 16px;
    width: 90%;
    max-width: 300px;
    justify-content: center;
  }
`;

export const ViberIcon2 = styled.span`
  font-size: 20px;
  transition: transform 0.3s ease;

  ${ViberButton2}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const ViberText2 = styled.span`
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
