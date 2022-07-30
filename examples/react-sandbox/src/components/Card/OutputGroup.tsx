import { Heading, Stack, Textarea } from '@chakra-ui/react'

export const OutputGroup = ({ placeholder }: { placeholder: string }) => {
  return (
    <Stack direction='column'>
      <Stack direction='row'>
        <Heading justifyContent='left' fontFamily='Inter' fontSize='sm' fontWeight='bold'>
          Output
        </Heading>
      </Stack>
      <Textarea placeholder={placeholder} borderColor='#212631' fontSize='sm'></Textarea>
    </Stack>
  )
}
