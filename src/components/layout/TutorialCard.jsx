import { styled } from 'styled-components';
import { main } from '../../config/theme';
import { mobile } from '../../config/responsive';

const Container = styled.article`
  width: 30%;
  max-height: 30rem;
  margin: auto;
  box-shadow: 0 3px 6px ${main.secondaryBg};
  padding: 2.5rem 0;
  border-radius: 12px;
  ${mobile({
    width: '90%',
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
  })}
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
`;
const Description = styled.p``;

const TutorialCard = ({ text, img }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <Description>{text}</Description>
      </Wrapper>
    </Container>
  );
};

export default TutorialCard;
