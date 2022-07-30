import { Stack } from '@chakra-ui/react'

import { Card } from '../Card/Card'
import { AssetCardListConfig } from './AssetCardListConfig'

export const AssetCardList = () => {
  return (
    <Stack direction='column' maxW='full' spacing='48px' p='16' borderRadius='xl'>
      {AssetCardListConfig.map((i, idx) => {
        return <Card key={i.name} name={i.name} icon={i.icon} actions={i.actions}></Card>
      })}
    </Stack>
  )
}
