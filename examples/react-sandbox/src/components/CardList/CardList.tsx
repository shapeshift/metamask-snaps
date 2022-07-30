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
      {cards.map((i, idx) => {
        return <Card key={i.name} name={i.name} icon={i.icon} actions={i.actions}></Card>
      })}
    </Stack>
  )
}
