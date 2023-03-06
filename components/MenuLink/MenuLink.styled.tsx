import styled from 'styled-components';

interface Props {
  readonly active: boolean;
}

export const StyledLink = styled.a<Props>`
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &:focus {
    outline: auto;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.foreground};
    transform-origin: bottom left;
    transition: ${({ active }) =>
      active ? 'none' : 'transform 0.3s ease-out'};
  }

  &:hover::after {
    transform: ${({ active }) => (active ? 'scaleX(0)' : 'scaleX(1)')};
  }
`;
