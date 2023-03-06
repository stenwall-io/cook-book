import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { StyledLink } from './Menu.styled';

interface Props {
  children: ReactNode;
}

const LogoutLink = ({ children }: Props) => {
  return (
    <StyledLink active={false} as="button" onClick={() => signOut()}>
      {children}
    </StyledLink>
  );
};

export default LogoutLink;
