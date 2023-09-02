import { styled } from 'styled-components';

const Container = styled.article``;
const Wrapper = styled.div``;

const ScrappedResults = ({ link }) => {
  return (
    <Container>
      <Wrapper>{link}</Wrapper>
    </Container>
  );
};

export default ScrappedResults;
