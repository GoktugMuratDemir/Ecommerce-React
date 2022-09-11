import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(19deg, rgba(2,0,36,0.3) 0%, rgba(195,72,196,0.3) 53%, rgba(0,66,255,0.35) 100%),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 40% ;
    padding: 20px;
    background-color: white;

    -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79); 
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79);

    @media only screen and (max-width:480px){
        width: 100%;
    }

    @media only screen and (max-width:980px){
        width: 80%;
    }

`

const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    line-height: 1.8;
    color: #c348c4;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

    text-align: center;
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
`
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;
    text-align: center;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #c348c4;

  &:hover {
    color: #9e739e;
  }
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background: linear-gradient(19deg, rgba(2,0,36,1) 0%, rgba(195,72,196,1) 53%, rgba(0,66,255,1) 100%);
    color: white;
    cursor: pointer;
    transition: all 1s ease-in;
    margin-bottom: 10px;

    border-radius: 30px;


    &:hover {
      background: linear-gradient(141deg, rgba(255,234,0,1) 0%, rgba(195,72,196,1) 50%, rgba(0,36,8,1) 100%);
    }
`

function Register() {
  return (
    <Container>

        <Wrapper>

            <Title>CREATE AN ACCOUNT</Title>

            <Form>

                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                
                

                <Bottom>

                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <Link><b>PRIVACY POLICY</b></Link>               
                    </Agreement>
                    <Button>CREATE</Button>

                </Bottom>

            </Form>

        </Wrapper>
        
    </Container>
  )
}

export default Register