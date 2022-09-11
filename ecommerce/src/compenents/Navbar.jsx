import React from 'react'
import { Search , ShoppingCartOutlined} from '@mui/icons-material';
import Badge from '@mui/material/Badge';

import {mobile} from "../responsive"


import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  
  /* @media only screen and (max-width:380px){
    display: none;
  } */

  ${mobile( {height:"10px", marginBottom:"30px",marginTop:"10px"} )}

  @media only screen and (max-width:480px){
    margin-bottom: 30px !important;
  }

  @media only screen and (max-width:980px){
    margin-bottom: 0px;
  }

  box-shadow: 0px 12px 20px -20px #111;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile( {padding:"0px 0px"} )}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #c348c4;
  cursor: pointer;
  ${mobile( {display:"none"} )}
  
`;



const SearchContainer = styled.div`
  position: relative;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  /* padding: 5px; */
`;

const Input = styled.input`

  /* padding: 5px 15px 5px 5px; // top right bottom left */
  
  padding: 7px;

  ${mobile( {width:"50px"} )}

  outline: transparent;
  border: solid 1.2px black;
  transition: all 0.2s ease-in-out;
  
  &::placeholder{
    color: #c348c4;
  }

  &:focus {
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79); 
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79);
    border-color: #c348c4;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media only screen and (max-width:480px){

    border-color: transparent;
    padding: 0px;
    width: 50px !important;
    
    &::placeholder{
    color: transparent;
    }

  }

  @media only screen and (max-width:980px){
  }
`;

const InputIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10%;
  cursor: pointer;
`



const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile( {fontSize:"24px"} )}
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile( {flex:"2",justifyContent:"center"} )}

 
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 25px;
  ${mobile( {fontSize:"12px", marginLeft:"10px"} )}
  transition: all 0.3s ease-out;

  &:hover {
    color: #c348c4;
    text-decoration: overline;
  }
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder="Search" />
            <InputIcon>
              <Search style={{ 
              color: "#c348c4", fontSize: 16
              }} />
            </InputIcon>
          </SearchContainer>

        </Left>
        <Center>
          <Logo>E-Shop.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;