import styled from 'styled-components';
import { CardWrapper } from '../CardWrapper/CardWrapper.styled';

export const CardImageWrapper = styled.figure`
  position: relative;
  top: 0;
  flex: 1;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-bottom: -1rem;

  img {
    object-fit: cover;
  }

  &::before {
    content: "";
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 14px;
		background: ${({theme}) => theme.colors.primarySolidHover};
		z-index: 2;
		transition: 0.2s;
		opacity: 0;
  }

  ${CardWrapper}:hover &::before {
    opacity: 0.6;
  }
`;