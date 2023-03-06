import styled from 'styled-components';

interface ListProps {
  readonly open: boolean;
  readonly desktop: boolean;
}

export const StyledList = styled.ul<ListProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  height: 100vh;
  width: ${({ desktop, open }) => (desktop ? 'auto' : open ? 'auto' : 0)};
  min-width: ${({ open }) => (open ? '70vw' : 'unset')};
  text-align: left;
  padding: ${({ open }) => (open ? '7rem 3rem' : 0)};
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out, width 0s 0.3s;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
  }

  flex-direction: ${({ desktop }) => (desktop ? 'row' : 'column')};
  background: ${({ desktop, theme }) =>
    desktop ? 'unset' : theme.colors.primaryLight};
  height: ${({ desktop }) => (desktop ? 'auto' : '100vh')};
  padding: ${({ desktop, open }) => (desktop ? 0 : open ? '7rem 3rem' : 0)};
  position: ${({ desktop }) => (desktop ? 'static' : 'absolute')};
  transition: ${({ desktop }) =>
    desktop ? 'unset' : 'transform 0.3s ease-in-out, width 0s 0.3s'};
  transform: ${({ desktop, open }) =>
    desktop ? 'unset' : open ? 'translateX(0)' : 'translateX(100%)'};
`;

interface LinkProps {
  readonly active: boolean;
}

export const StyledLink = styled.a<LinkProps>`
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
    /* transform: ${({ active }) => (active ? 'none' : 'scaleX(1)')}; */
    transform: scaleX(1);
  }
`;
