import React from 'react';

import {
  Container,
  Brand,
  Name,
  Period,
  Price,
  Rent,
  Type,
  About,
  Datails,
  CarImage,
} from './styles';

import GasolineSvg from '../../assets/gasoline.svg';

interface CarProps {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

interface Props {
  data: CarProps
}

export function Car({ data }: Props) {
  return (
    <Container>
      <Datails>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Datails>

      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode="contain"
      />
    </Container>
  )
}
