import styled from 'styled-components';

interface Props {
  readonly variant: 'default' | 'small' | 'side';
}

export const CardWrapper = styled.a<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 14rem;
  height: 12rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: 14px;
`;
