import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const Logo = styled.h1`
  padding: 0;
  margin: 0;
`;
const Desc = styled.p`
  margin: 40px 0px;
`;
const SocialContact = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 75px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
  ${mobile({ paddingLeft: '15px', backgroundColor: '#D4D4D4' })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Payment = styled.img`
  width: 75%;
  height: 100px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Poke</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          aliquam exercitationem est reprehenderit porro nobis neque nesciunt
          iure saepe voluptatum possimus optio fuga voluptate aliquid
          perferendis deserunt qui perspiciatis! Quo.
        </Desc>
        <SocialContact>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
        </SocialContact>
      </Left>
      <Center>
        <Title>Directory</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Pokemon</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>TM/HM</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Sign In</ListItem>
          <ListItem>Register</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: '15px' }} /> 123 Pallet Town, Kanto Region
          12345
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '15px' }} /> +1 123 456 7890
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '15px' }} />
          contact@pokemart.com
        </ContactItem>
        <Payment src='images/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
