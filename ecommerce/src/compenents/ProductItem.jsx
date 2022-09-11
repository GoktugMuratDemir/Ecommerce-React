import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c448c491;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }

    @media only screen and (max-width:380px){
       height: 25vh !important;
    }

`

const Circle = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

    @media only screen and (max-width:380px){
       height: 120px !important;
       width: 120px;
    }
`

const Image = styled.img`
    max-width: 90%;
    height: 75%;
    z-index: 2;

    @media only screen and (max-width:480px){
        height: 90%;
    }
`
// Opacity deki hover ın gözükmesi için yukarıya aldık
// const Info = styled.div`
//     opacity: 0;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0,0,0,0.2);
//     z-index: 3;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px ;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 0px 0px 7px 3px #000000; 
        box-shadow: 0px 0px 7px 3px #000000;
        background-color: #c448c4de;
        transform: scale(1.5);
        /* zoom: 150%; */ /* zoom yaparsan animasyonlu çıkmaz */
    }

`

function ProductItem( {item} ) {
  return (
    <Container>
        
        <Circle />

        <Image src={item.img} />

        <Info>

            <Icon>
                <ShoppingCartOutlined/>
            </Icon>

            <Icon>
                <SearchOutlined/>
            </Icon>

            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>

        </Info>

    </Container>
  )
}

export default ProductItem