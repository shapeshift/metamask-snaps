import { Stack } from '@chakra-ui/react'

import { Card, CardProps } from '../Card/Card'

export const CardList = ({ cards }: { cards: Array<CardProps> }) => {
  return (
    <Stack
      direction='column'
      width='100%'
      spacing='14px'
      borderRadius='xl'
      minWidth='768px'
      maxWidth='1440px'
    >
      {cards.map((card, idx) => {
        return (
          <Card
            key={card.name}
            name={card.name}
            icon={card.icon}
            actions={card.actions}
            hasInputField={card.hasInputField}
          ></Card>
        )
      })}
    </Stack>
  )
}
