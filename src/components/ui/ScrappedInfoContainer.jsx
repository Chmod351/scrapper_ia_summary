import { useState } from 'react';
import { styled } from 'styled-components';
import { mobile } from '../../config/responsive';
import { temporalLinks } from '../layout/dummy';
import ScrappedResults from './ScrappedResults';
import { main } from '../../config/theme';

const Container = styled.section`
  max-width: 1100px;
  ${mobile({ flexDirection: 'column' })}
`;
const Pc = styled.div`
  display: flex;
  flex-direction: row;
  ${mobile({ display: 'none' })}
`;
const Mobile = styled.div`
  display: none;
  ${mobile({ display: 'flex' })}
`;

const Wrapper = styled.div`
  max-width: 70%;
  ${mobile({ maxWidth: '100%' })}
`;
const Related = styled.aside`
  max-width: 30%;
  ${mobile({ maxWidth: '100%' })}
`;
const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ScrappedInfoContainer = () => {
  const [related, setRelated] = useState(false);
  const Title = styled.h2`
    display: flex;
    justify-content: center;
    color: ${main.primaryFonts};
  `;
  return (
    <Container>
      <Pc>
        <Wrapper>
          <Title style={{ color: `black` }}>Results:</Title>
          {temporalLinks.map((l) => {
            const { id, link } = l;
            return <ScrappedResults key={id} link={link} />;
          })}
        </Wrapper>
        <Related>
          <Title style={{ color: `black` }}>Related:</Title>

          {temporalLinks.map((temp) => {
            const { id, link } = temp;
            return <ScrappedResults key={id} link={link} />;
          })}
        </Related>
      </Pc>
      <Mobile>
        {related ? (
          <Related>
            <Options>
              <Title
                onClick={() => {
                  setRelated(!related);
                }}
              >
                Results:
              </Title>
              <Title
                style={{ color: `black` }}
                onClick={() => {
                  setRelated(!related);
                }}
              >
                Related:
              </Title>{' '}
            </Options>
            {temporalLinks.map((temp) => {
              const { id, link } = temp;
              return <ScrappedResults key={id} link={link} />;
            })}
          </Related>
        ) : (
          <Wrapper>
            <Options>
              <Title
                style={{ color: `black` }}
                onClick={() => {
                  setRelated(!related);
                }}
              >
                Results:
              </Title>
              <Title
                onClick={() => {
                  setRelated(!related);
                }}
              >
                Related:
              </Title>
            </Options>

            {temporalLinks.map((l) => {
              const { id, link } = l;
              return <ScrappedResults key={id} link={link} />;
            })}
          </Wrapper>
        )}
      </Mobile>
    </Container>
  );
};

export default ScrappedInfoContainer;
