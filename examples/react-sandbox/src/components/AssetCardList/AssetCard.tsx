import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

import { logger } from '../../lib/logger'

export type AssetCardActionProps = {
  callback?: Function
  args?: any
  description?: string
}

export type AssetCardProps = {
  name: string
  icon: string
  actions: Map<string, AssetCardActionProps>
}

const moduleLogger = logger.child({ namespace: ['AssetCard'] })

export const AssetCard = (args: AssetCardProps) => {
  const [textAreaPlaceHolder, setTextAreaPlaceHolder] = useState(
    'Select an action from the drop-down menu below.',
  )
  const [selectedAction, setSelectedAction] = useState('')

  const handleSelectChange = (e: any) => {
    setSelectedAction(e.target.value)
    setTextAreaPlaceHolder(args.actions.get(e.target.value)?.description || '')
  }
  const handleSubmit = () => {
    const action = args.actions.get(selectedAction)
    if (action && action.callback) {
      action.callback(action.args)
    } else {
      if (selectedAction) {
        moduleLogger.error(
          { fn: 'handleSubmit' },
          `No callback registered for ${args.name} '${selectedAction}' action.`,
        )
      } else {
        moduleLogger.info(
          { fn: 'handleSubmit' },
          `Select an action from the drop-down list before clicking 'Submit'!`,
        )
      }
    }
  }

  return (
    <Flex
      bg={useColorModeValue('white', '#181C27')}
      width='100%'
      minHeight='300'
      borderWidth='1'
      borderRadius='xl'
      boxShadow='2xl'
    >
      <Box bg={useColorModeValue('gray.300', '#1A202C')} width='10%' borderLeftRadius='xl'>
        <Center p='4'>
          <Image
            objectFit='contain'
            boxSize='100%'
            src={require('../../assets/token-icons/' + args.icon)}
          ></Image>
        </Center>
      </Box>
      <Box p='4' width='100%'>
        <Stack direction='column' width='90%' spacing='16px'>
          <Stack direction='row'>
            <Heading justifyContent='left' fontFamily='Inter'>
              {args.name}
            </Heading>
          </Stack>
          <Divider orientation='horizontal' borderColor='#212631' borderWidth='1px'></Divider>
          <Textarea placeholder={textAreaPlaceHolder} borderColor='#212631'></Textarea>
          <Stack direction='row'>
            <Select
              variant='outline'
              placeholder='Select action'
              borderColor='#212631'
              onChange={handleSelectChange}
            >
              {[...args.actions.keys()].map((action, idx) => {
                return <option value={action}>{action}</option>
              })}
            </Select>
            <Button width='15%' minWidth='100px' bg='#3761F9' color='white' onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}
