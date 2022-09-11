import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile( {flexDirection:"column"} )}

`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${ props => props.color };

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    text-align: center;
    ${mobile( {display:"none"} )}

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.05s ease-in;

    &:hover {
        color: #c348c4;
        font-weight: 700;
        text-decoration: overline;
    }
`

const Right = styled.div`
    flex:1;
    padding: 20px;

  ${mobile( {backgroundColor:"#fcf5f5"} )}

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`



function Footer() {
  return (
    <Container>

        <Left>
            <Logo>Lama.</Logo>

            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum voluptatum 
                temporibus aspernatur laboriosam cumque, amet excepturi. Rerum hic necessitatibus iste, possimus labore 
                dignissimos, suscipit a odio ipsum maxime expedita.
            </Desc>

            <SocialContainer>

                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>

                <SocialIcon color="E60023">
                    <LinkedIn />
                </SocialIcon>

            </SocialContainer>
        </Left>

        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Card</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whislist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Winter</ListItem>

            </List>

        </Center>

        <Right>

            <Title>Contact</Title>

            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98152
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 756 835
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> contact@gmail.com
            </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

        </Right>
        
    </Container>
  )
}

export default Footer