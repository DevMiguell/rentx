import React from 'react'
import { StatusBar } from 'react-native'

import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Content,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessorys,
  Footer,
} from './styles'
import { Button } from '../../components/Button'

export function CarDetails() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <BackButton
          onPress={() => { }}
        />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png?wid=850']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessorys>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 Pessoas" icon={PeopleSvg} />
        </Acessorys>

        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, totam ipsam. Repellat eaque laboriosam repudiandae tempora iure blanditiis distinctio sint maiores reprehenderit architecto itaque atque esse, exercitationem possimus numquam animi!
        </About>
      </Content>

      <Footer>
        <Button
          title="Alugar"
        />
      </Footer>
    </Container>
  )
}
