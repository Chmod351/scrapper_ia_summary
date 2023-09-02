import { styled } from 'styled-components';

const Container = styled.section`
  display: flex;
`;
const Wrapper = styled.div`
  max-width: 1100px;
  flex-wrap: wrap;
`;

const TutorialContainer = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default TutorialContainer;
