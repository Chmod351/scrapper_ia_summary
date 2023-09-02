import { styled } from 'styled-components';
import { main } from '../../config/theme.js';
import { useState } from 'react';
import { mobile } from '../../config/responsive.js';

const Wrapper = styled.div`
  display: flex;
  width: 15%;
  background-color: ${main.primary};
  color: ${main.primaryBg};
  height: 2.5rem;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  font-weight: bold;
  ${mobile({ width: '49%', margin: '1rem auto' })}
`;

const Sources = ({ title }) => {
  const [selected, isSelected] = useState(false);
  return <Wrapper>{title}</Wrapper>;
};

export default Sources;
