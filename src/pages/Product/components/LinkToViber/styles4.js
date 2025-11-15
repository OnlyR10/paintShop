import styled, { keyframes } from "styled-components";
import { TEXT_PALETTE } from "../../../../config/palette";

// Анимация для привлечения внимания
const pulseGold = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(218, 165, 32, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(218, 165, 32, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(218, 165, 32, 0);
  }
`;

const subtleBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

export const EnhancedContainer4 = styled.div`
  width: max-content;
  margin: 0 auto;
  padding: 1.2rem 2rem;

  border: 0.2rem solid ${TEXT_PALETTE.active};
  border-radius: 2.5rem;
  background: linear-gradient(135deg, #ffff00 0%, #ffeb3b 100%);

  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  /* Анимация привлечения внимания */
  animation: ${pulseGold} 2s infinite, ${subtleBounce} 3s ease-in-out infinite;

  /* Блестящий эффект поверх */
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
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: ${TEXT_PALETTE.active};
    background: linear-gradient(
      135deg,
      ${TEXT_PALETTE.active} 0%,
      #e6b800 100%
    );
    transform: translateY(-2px) scale(1.02);
    animation: none; /* Убираем анимацию при hover */

    &::before {
      left: 100%;
    }

    /* Эффект для текста при hover */
    [data-scope="viber-link"] {
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  &:active {
    transform: translateY(0) scale(0.98);
    background: linear-gradient(135deg, #b8860b 0%, #daa520 100%);
    transition: all 0.1s ease;
  }

  /* Focus состояние для доступности */
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px rgba(218, 165, 32, 0.3),
      0 4px 20px rgba(218, 165, 32, 0.4);
  }

  /* Адаптивность */
  @media (max-width: 768px) {
    padding: 1rem 1.8rem;
    margin: 1rem auto;

    [data-scope="viber-link"] {
      font-size: 1.8rem;
    }
  }
`;

export const EnhancedViberLink4 = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: "Inter-Regular", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;

  border-bottom: 0.2rem solid transparent;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 2;

  /* Эффект подчеркивания при hover */
  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.8);
  }

  /* Убираем стандартные стили ссылки */
  &:focus {
    outline: none;
  }
`;

export const ViberIcon4 = styled.span`
  font-size: 2.2rem;
  transition: all 0.3s ease;

  ${EnhancedContainer4}:hover & {
    transform: scale(1.2) rotate(5deg);
    filter: brightness(1.2);
  }
`;

// Альтернативный вариант с более заметной анимацией
export const AttentionContainer4 = styled(EnhancedContainer4)`
  animation: ${pulseGold} 1.5s infinite, ${subtleBounce} 2s ease-in-out infinite;

  /* Более агрессивная анимация для CTA кнопок */
  @keyframes aggressivePulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(218, 165, 32, 0.7);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 0 12px rgba(218, 165, 32, 0);
    }
  }

  &.aggressive {
    animation: aggressivePulse 2s infinite;
  }
`;
