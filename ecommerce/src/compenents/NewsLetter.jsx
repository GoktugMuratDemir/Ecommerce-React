import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background: linear-gradient(19deg, rgba(2,0,36,1) 0%, rgba(195,72,196,1) 53%, rgba(0,66,255,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media only screen and (max-width:480px){
        height: 40vh !important;
    }

    @media only screen and (max-width:980px){
        height: 30vh;
    }
`

const Title = styled.h1`
    color: #fff;
    font-size: 70px;
    margin-bottom: 20px;


    @media only screen and (max-width:380px){
        font-size: 50px;
    }
`

const Desc = styled.div`
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;

    @media only screen and (max-width:380px){
        font-size: 15px;
    }
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile( {width:"80%"} )}

`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;

    &:focus {
        outline: none;
    }
    

`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #640080;
    color: white;
    transition: all 0.2s ease-out;

    &:hover {
        background-color: #80006d;
    }
`

function NewsLetter() {
  return (
    <Container>

        <Title>NewsLetter</Title>
        <Desc>Get timely updates from favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
        
    </Container>
  )
}

export default NewsLetter