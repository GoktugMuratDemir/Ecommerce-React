import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Slider.css"
import styled from 'styled-components'
import { sliderItems } from '../data'
import {mobile} from "../responsive"


// -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79); 
//     box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79);
//     border-color: #c348c4;

const Container = styled.div`
    /* margin-top: 30px; */
    width: 100%;
    height: 87vh;

    /* Resimleri yan yana dizer */
    display: flex;

    position: relative;

    /* aşağıdaki kaydırma çubuğunu kaldırır */
    overflow: hidden;

  ${mobile( {display:"none"} )}

  @media only screen and (max-width:980px){
    display: none;
  }

    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    /* background-color: #fff7f7; */
    background: linear-gradient(19deg, rgba(2,0,36,1) 0%, rgba(195,72,196,1) 53%, rgba(0,66,255,1) 100%);
    border: 2px solid transparent;
    border-radius: 50%;
    
    /* Arrowları daire içinde ortalamak için */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Dikeyde ortalamak için */
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ props=> props.direction === "left" && "10px" };
    right: ${ props=> props.direction === "right" && "10px" };
    margin: auto;  

    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

    transition: all 0.5s ease-out;

    &:hover {
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,1); 
        box-shadow: 0px 0px 7px 0px rgba(0,0,0,1);
        border-color: #c348c4;
    }
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX( ${ props => props.slideIndex * -100}vw );
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${ props => props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%; 
    margin-left: 30px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-top: -100px;
    margin-left: -100px;
`

const Title = styled.h1`
    font-size: 60px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &:hover {
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79); 
      box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79);
      border-color: #c348c4;
      /* color: #c348c4; */
      background-color: #c448c456;
    }
`



function Slider() {

    const [ slideIndex, setSlideIndex ] = useState(1) 

    const handleClick = ( direction ) => {
        
        if( direction === "left" ) {
            setSlideIndex (
                slideIndex > 0 ? slideIndex - 1 : 2
            )
        }

        else {
            setSlideIndex (
                slideIndex < 2 ? slideIndex + 1 : 0
            )
        }

    }


  return (
    <div className='slider'>
        <Container>

            <Arrow direction="left" onClick={ () => handleClick("left") } >
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map( (item) => 

                    <Slide bg={item.bg} key={item.id} >

                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>

                        <InfoContainer>
                            <Title> { item.title } </Title>
                            <Desc> { item.desc } </Desc>
                            <Button> SHOP NOW </Button>
                        </InfoContainer>

                    </Slide>
                
                )}

                

                
            </Wrapper>

            <Arrow direction="right" onClick={ () => handleClick("right") }>
                <ArrowRightOutlined />
            </Arrow>

        </Container>

    </div>
  )
}

export default Slider