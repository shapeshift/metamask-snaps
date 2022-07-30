import { Heading, Stack, Textarea } from '@chakra-ui/react'
import ResizeTextArea from 'react-textarea-autosize'

type OutputGroupProps = {
  placeholder: string
  text: any
}

export const OutputGroup = ({ placeholder, text }: OutputGroupProps) => {
  return (
    <Stack direction='column'>
      <Stack direction='row'>
        <Heading
          justifyContent='left'
          fontFamily='Inter'
          fontSize='sm'
          fontWeight='bold'
          color='#718096'
        >
          Output
        </Heading>
      </Stack>
      <Textarea
        placeholder={placeholder}
        value={text && JSON.stringify(text, null, 2)}
        borderColor='#212631'
        fontSize='sm'
        overflow='hidden'
        resize='none'
        as={ResizeTextArea}
      />
    </Stack>
  )
}
