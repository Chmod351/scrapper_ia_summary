import { styled } from 'styled-components';
import TutorialCard from './TutorialCard';
import { tutorial } from './dummy';
import { mobile } from '../../config/responsive';

const Container = styled.section`
  max-width: 1100px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: auto;
  ${mobile({ flexDirection: 'column' })}
`;

const TutorialContainer = () => {
  return (
    <Container>
      <Wrapper>
        {tutorial.map((t) => {
          const { id, text, img } = t;
          return <TutorialCard key={id} text={text} img={img} index={id} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default TutorialContainer;
