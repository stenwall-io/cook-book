import { StyledBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="menu"
    >
      <span>Menu</span>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
