import React from 'react'
import styled from 'styled-components'
import Announcement from '../compenents/Announcement'
import Footer from '../compenents/Footer'
import Navbar from '../compenents/Navbar'
import NewsLetter from '../compenents/NewsLetter'
import Products from '../compenents/Products'

const Container = styled.div`

`

const Title = styled.h1`
 margin: 20px;
 text-align: center;
 font-weight: 600;
 letter-spacing: 7px;

 @media only screen and (max-width:480px){
        margin: 0px;
        font-size: 24px;
    }
 
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width:480px){
       flex-direction: column;
    }
`

const Filter = styled.div`
    margin: 20px;

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    @media only screen and (max-width:480px){
       font-size: 15px;
       margin-right: 10px;
    }
    
`

const Select = styled.select`
    padding: 10px 15px;
    margin-right: 20px;
    cursor: pointer;

    @media only screen and (max-width:480px){
        padding: 5px 5px;
        margin-right: 10px;
        width: 80px;
    }

    @media only screen and (max-width:980px){
        margin-top: 10px;
    }
`

const Option = styled.option`
    cursor: pointer !important;
`


function ProductList() {
  return (
    <Container>
        <Announcement />
        <Navbar />
        
        <Title>DRESSES</Title>

        <FilterContainer>

            <Filter>
                <FilterText>Filter-Products:</FilterText>

                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>

                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>

            </Filter>

            <Filter>

                <FilterText>Sort-Products:</FilterText>

                <Select>
                    <Option select>Newst</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>

            </Filter>

        </FilterContainer>

        <Products />
        <NewsLetter />
        <Footer />

    </Container>
  )
}

export default ProductList