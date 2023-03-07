import styled from 'styled-components';

interface Props {
  readonly variant: 'default' | 'small' | 'side';
}

export const CardWrapper = styled.a<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 14rem;
  height: 12rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: 14px;
`;

export const CardImageWrapper = styled.figure`
  position: relative;
  top: 0;
  flex: 1;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  img {
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 0.5rem 1rem;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  z-index: 2;
  height: 3.7rem;

  ${CardWrapper}:hover & {
    height: 6rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;
