import { styled } from 'styled-components';
import { main } from '../../config/theme';
import { mobile } from '../../config/responsive';
import Sources from '../layout/Sources';
import { sectionTitlesAndSubtitles } from '../layout/dummy.js';

const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1100px;
`;
const Wrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
  ${mobile({ width: '90%' })}
`;
const SourcesContainer = styled.div`
  display: flex;
  margin: auto;
  ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`;
const Title = styled.h1`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 2rem;
  ${mobile({ fontSize: '2rem' })}
`;
const FormWrapper = styled.div`
  width: 20%%;
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 50%;
  height: 2.3rem;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  ${mobile({ width: '80%' })}
`;
const Button = styled.button`
  width: 5rem;
  height: 2.5rem;
  border: none;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  background-color: ${main.callToAction};
  font-weight: bold;
  ${mobile({ width: '5rem' })}
`;
const Demo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Select yours Sources</Title>
        <SourcesContainer>
          {sectionTitlesAndSubtitles.map((a) => {
            const { id, title, link, css } = a;
            return <Sources key={id} title={title} link={link} css={css} />;
          })}
          <FormWrapper>
            <Input placeholder="Keyword" />
            <Button>Start</Button>
          </FormWrapper>
        </SourcesContainer>
      
      </Wrapper>
    </Container>
  );
};

export default Demo;
