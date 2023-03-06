import { ReactNode, useState, useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { Burger, Menu } from '@components';
import useMediaQuery from 'hooks/useMediaQuery';
import Link from 'next/link';
import { StyledNavbar, StyledTitle } from './Navbar.styled';

interface Props {
  open: boolean;
  desktop: boolean;
  children?: ReactNode;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const isDesktop = useMediaQuery('(min-width: 810px)');
  useOutsideClick(node, () => setOpen(false));

  return (
    <StyledNavbar>
      <Link href="/">
        <StyledTitle>Cook Book</StyledTitle>
      </Link>
      <div ref={node}>
        <Menu open={open} desktop={isDesktop}>
          {!isDesktop && <Burger open={open} setOpen={setOpen} />}
        </Menu>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

// Source for accessibility
// ----------------------------------------------------------------
// https://www.a11ymatters.com/pattern/mobile-nav/
// https://a11y-style-guide.com/style-guide/section-navigation.html
// http://web-accessibility.carnegiemuseums.org/code/navigation/
