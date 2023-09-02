import { styled } from 'styled-components';
import { mobile } from '../../config/responsive.js';
import { main } from '../../config/theme.js';

const Title = styled.h1`
  color: ${main.secondaryCallToAction};
  ${mobile({ fontSize: '6vw' })}
`;
const Subtitle = styled.p`
  color: ${main.primaryFonts};
`;
const Wrapper = styled.div`
  display: flex;
  margin: 2rem auto;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
`;
const Header = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default Header;
