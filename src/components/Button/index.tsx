import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

import {
  Container,
  Title,
} from './styles'

interface Props extends BorderlessButtonProps {
  title: string;
  color?: string
  // onPress: () => void;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}
