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
  // onPress: () => void;
}

export function ConfirmButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}
