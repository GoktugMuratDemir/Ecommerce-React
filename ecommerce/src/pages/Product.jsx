
import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../compenents/Announcement'
import Footer from '../compenents/Footer'
import Navbar from '../compenents/Navbar'
import NewsLetter from '../compenents/NewsLetter'

const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  margin-top: -20px;

  @media only screen and (max-width:480px){
        flex-direction: column;
  }

  @media only screen and (max-width:980px){
        margin-top: 20px;
  }
`

const ImageContainer = styled.div`
  flex:1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  

  @media only screen and (max-width:480px){
    height: 30vh;
    margin-top: -20px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width:980px){
    height: 100%;
  }

`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  @media only screen and (max-width:480px){
    text-align: center;
    padding: 0px 0px;
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:480px){
    width: 100%;
    margin-top: 5px;
  }
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${ props => props.color };
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`

const FilterSizeOption = styled.option`
  cursor: pointer;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width:480px){
    width: 100%;
  }

  @media only screen and (max-width:980px){
    width: 100%;
  }
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #c348c4;;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-out;

  &:hover {
      -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79); 
      box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.79);
      border-color: #fff;
      color: white;
      /* color: #c348c4; */
      background: linear-gradient(19deg, rgba(2,0,36,1) 0%, rgba(195,72,196,1) 53%, rgba(0,66,255,1) 100%);
    }
`






function Product() {
  return (
    <Container>
        <Announcement />
        <Navbar />

        <Wrapper>

            <ImageContainer>

              <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                
            </ImageContainer>

            <InfoContainer>

                <Title>Lorem BlaBla</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestiae enim velit impedit accusamus modi, illo neque, aliquid atque assumenda a nobis. Repellendus hic repellat sit assumenda aut nobis nostrum.</Desc>
                <Price>$ 20</Price>

                <FilterContainer>

                  <Filter>

                    <FilterTitle>Color:</FilterTitle>
                    <FilterColor color="black"></FilterColor>
                    <FilterColor color="darkblue"></FilterColor>
                    <FilterColor color="gray"></FilterColor>

                  </Filter>

                  <Filter>

                    <FilterTitle>Size</FilterTitle>

                    <FilterSize>

                      <FilterSizeOption>XS</FilterSizeOption>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>M</FilterSizeOption>
                      <FilterSizeOption>L</FilterSizeOption>
                      <FilterSizeOption>XL</FilterSizeOption>


                    </FilterSize>

                  </Filter>

                </FilterContainer>

                <AddContainer>

                  
                  <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                  </AmountContainer>

                  <Button>Add to Card</Button>
                  


                </AddContainer>

                

            </InfoContainer>

        </Wrapper>


        <NewsLetter />
        <Footer/>
    </Container>
  )
}

export default Product