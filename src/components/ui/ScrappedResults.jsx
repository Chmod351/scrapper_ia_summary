import { styled } from 'styled-components';
import { main } from '../../config/theme';
const Container = styled.article`
  margin: 1rem;
  background-color: ${main.primaryResults};
  border-radius: 1rem;
  cursor: pointer;
`;
const Wrapper = styled.div`
  max-height: 30rem;
  height: auto;
  flex-wrap: wrap;
  margin: auto;
  padding: 1rem;
  overflow: hidden;
`;

const ScrappedResults = ({ link }) => {
  return (
    <Container>
      <Wrapper title={link}>{link}</Wrapper>
    </Container>
  );
};

export default ScrappedResults;
