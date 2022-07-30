import {
  //   Container,
  Heading,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react'

export const InputGroup = ({ description }: { description: string }) => {
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
          Input
        </Heading>
      </Stack>
      <Popover trigger='hover' closeOnBlur={true} placement='bottom-start'>
        <PopoverTrigger>
          <Input
            placeholder={description && 'Mouseover for details.'}
            borderColor='#212631'
            size='sm'
            fontFamily='Inter'
          ></Input>
        </PopoverTrigger>
        {description && (
          <PopoverContent fontFamily='Inter' fontSize='sm' alignItems='start'>
            <PopoverHeader fontWeight='bold' border='0'>
              USAGE
            </PopoverHeader>
            <PopoverBody>{description}</PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </Stack>
  )
}
