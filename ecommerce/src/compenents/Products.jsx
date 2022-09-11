import React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import { popularProducts } from '../data'

const Container = styled.div`
    padding: 20px;

    /* Ürünleri ekran boyutuna göre otomatik col ayırır */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

function Products() {
  return (
    <Container>

        { popularProducts.map( item => (
            <ProductItem item={item} key={item.id} />
        ) )}
        
    </Container>
  )
}

export default Products