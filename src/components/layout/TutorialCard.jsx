import { styled } from 'styled-components';

const Container = styled.article``;
const Wrapper = styled.div``;
const Image = styled.img``;
const Description = styled.p``;

const TutorialCard = () => {
  return (
    <Container>
      <Wrapper>
        <Image />
        <Description></Description>
      </Wrapper>
    </Container>
  );
};

export default TutorialCard;
