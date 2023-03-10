import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.foreground};
`;

export const StyledTitle = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  padding-right: 3rem;
`;