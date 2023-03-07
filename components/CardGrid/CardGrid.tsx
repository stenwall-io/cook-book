import { StyledCardGrid } from './CardGrid.styled';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const CardGrid = ({ children }: Props) => {
  return <StyledCardGrid>{children}</StyledCardGrid>;
};

export default CardGrid;
