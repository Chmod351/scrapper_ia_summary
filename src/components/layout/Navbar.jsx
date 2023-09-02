import { styled } from 'styled-components';
import { links } from './dummy';
import { mobile } from '../../config/responsive';
import { main } from '../../config/theme';

const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${main.secondaryCallToAction};
  box-shadow: 0px 0px 8px rgba(99, 99, 99, 0.2);
`;
const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  ${mobile({
    justifyContent: 'center',
    width: '100%',
  })}
`;
const Logo = styled.img`
  height: 70px;
  width: auto;
  ${mobile({ display: 'none' })}
`;

const LinkListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${mobile({ margin: '25px auto' })}
`;
const ListContainer = styled.li`
  margin: 0 2rem;
  display: block;
`;
const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  color: ${main.primaryBg};
`;

const reposiroty =
  'https://user-images.githubusercontent.com/88646148/257896125-ccf99b1d-f8b6-4cda-b5e6-4891b88add2b.png';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={reposiroty} alt="web-scrapper-logo" />
        <LinkListContainer>
          {links.map((l) => {
            const { id, section, url } = l;

            return (
              <ListContainer key={id}>
                <NavLink href={url} target="_blank">
                  {section}
                </NavLink>
              </ListContainer>
            );
          })}
        </LinkListContainer>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
