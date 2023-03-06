import Link from 'next/link';
import { ReactNode } from 'react';
import { StyledLink } from './MenuLink.styled';

interface Props {
  href: string;
  active: boolean;
  children: ReactNode;
}

const MenuLink = ({ href, active, children }: Props) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink active={active}>{children}</StyledLink>
    </Link>
  );
};

export default MenuLink;
