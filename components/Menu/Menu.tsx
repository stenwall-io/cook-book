import Link from 'next/link';
import { StyledList } from './Menu.styled';
import { MenuLink, LogoutButton } from '@components';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

interface Props {
  open: boolean;
  desktop: boolean;
  children?: ReactNode;
}

const Menu = ({ open, desktop, children }: Props) => {
  const { asPath: currentPath } = useRouter();

  return (
    <nav>
      {children}
      <StyledList
        id="menu"
        open={open}
        desktop={desktop}
        role="navigation"
        aria-hidden={desktop ? 'false' : open ? 'false' : 'true'}
      >
        <li>
          <MenuLink
            href="/recept"
            active={currentPath === '/recept' ? true : false}
          >
            Recept
          </MenuLink>
        </li>
        <li>
          <LogoutButton>Logga ut</LogoutButton>
        </li>
      </StyledList>
    </nav>
  );
};

export default Menu;
