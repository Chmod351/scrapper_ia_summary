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
  ${mobile({ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' })}
`;
const Title = styled.h1`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 2rem;
  ${mobile({ fontSize: '6vw' })}
`;
const FormWrapper = styled.div`
  width: 20%;
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${mobile({ width: '100%' })}
`;
const Input = styled.input`
  width: 50%;
  height: 0.5rem;
  outline: none;
  border-radius: 5rem 0 0 5rem;
  border: none;
  padding: 1rem;
  color: ${main.primaryFonts};
  background-color: ${main.primaryResults};
  ${mobile({ width: '100%' })}
`;
const Button = styled.button`
  width: 5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0 5rem 5rem 0;
  cursor: pointer;
  background-color: ${main.callToAction};
  font-weight: bold;
  ${mobile({ width: '5rem' })}
`;

const desc = 'use the keyword to get specific results';
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
            <Input placeholder="Keyword" title={desc} />
            <Button>Start</Button>
          </FormWrapper>
        </SourcesContainer>

      </Wrapper>
    </Container>
  );
};

export default Demo;
