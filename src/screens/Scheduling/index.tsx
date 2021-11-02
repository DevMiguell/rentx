import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'
import { BackButton } from '../../components/BackButton'

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  DateTitle,
  DateValue,
  DateInfo,
  RentalPeriod,
  Content,
  Footer
} from './styles'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'

export function Scheduling() {
  const theme = useTheme()

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <BackButton
          color={theme.colors.shape}
          onPress={() => { }}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel {'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>
              DE
            </DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>
              ATÉ
            </DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  )
}
