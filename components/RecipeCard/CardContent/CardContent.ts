import styled from 'styled-components';
import { CardWrapper } from '../CardWrapper/CardWrapper.styled';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 0.7rem 1rem;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  z-index: 2;
  height: 3.7rem;
  transition: height 0.2s ease-in-out;

  p {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  ${CardWrapper}:hover & {
    height: 8rem;

    p {
      opacity: 1;
    }
  }
`;