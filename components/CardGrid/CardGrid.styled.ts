import styled from 'styled-components';

interface Props {
  readonly open: boolean;
}

export const StyledCardGrid = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;
