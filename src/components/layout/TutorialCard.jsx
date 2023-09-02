import { styled } from 'styled-components';
import { main } from '../../config/theme';
import { mobile } from '../../config/responsive';

const Container = styled.article`
  width: 30%;
  height: 25rem;
  box-shadow: 0 3px 6px ${main.secondaryBg};
  padding: 0.5rem;
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
  height: 16rem;
  max-width: 100%;
  object-fit: fit;
`;
const Description = styled.p`
  margin-top: 2rem;
  color: ${main.primaryFonts};
`;

const TutorialCard = ({ text, img, index }) => {
  const marginTopInRem = index * 2;
  return (
    <Container style={{ marginTop: `${marginTopInRem}rem` }}>
      <Wrapper>
        <Image src={img} />
        <Description>{text}</Description>
      </Wrapper>
    </Container>
  );
};

export default TutorialCard;
