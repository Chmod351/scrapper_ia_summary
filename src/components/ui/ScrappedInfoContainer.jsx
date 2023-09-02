import { styled } from 'styled-components';
import { temporalLinks } from '../layout/dummy';
import ScrappedResults from './ScrappedResults';
const Container = styled.section``;
const Wrapper = styled.div``;

const ScrappedInfoContainer = () => {
  return (
    <Container>
      <Wrapper>
        {temporalLinks.map((l) => {
          const { id, link } = l;
          return <ScrappedResults key={id} link={link} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default ScrappedInfoContainer;
