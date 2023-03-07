import styled from 'styled-components';

interface Props {
  readonly open: boolean;
}

export const StyledBurger = styled.button<Props>`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  div {
    width: 2rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(3) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(4) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
