import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1600px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.foreground};
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  padding-right: 3rem;
`;