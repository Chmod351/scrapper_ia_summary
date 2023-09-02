import { styled } from 'styled-components';
import { mobile } from '../../config/responsive.js';

const Title = styled.h1`
  ${mobile({ fontSize: '6vw' })}
`;
const Subtitle = styled.p``;
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
