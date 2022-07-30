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
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

import { logger } from '../../lib/logger'
import { InputGroup } from './InputGroup'
import { OutputGroup } from './OutputGroup'

export type CardActionProps = {
  callback?: Function
  params?: any
  description?: string
  inputFieldDescription?: string
}

export type CardProps = {
  name: string
  icon: string
  actions: Map<string, CardActionProps>
  hasInputField?: boolean
}

const moduleLogger = logger.child({ namespace: ['Card'] })

export const Card = ({ name, icon, actions, hasInputField }: CardProps) => {
  const [outputPlaceHolder, setOutputPlaceHolder] = useState(
    'Select an action from the drop-down menu below.',
  )
  const [selectedAction, setSelectedAction] = useState('')

  const handleSelectChange = (e: any) => {
    setSelectedAction(e.target.value)
    setOutputPlaceHolder(actions.get(e.target.value)?.description || '')
  }
  const handleSubmit = () => {
    const action = actions.get(selectedAction)
    if (action && action.callback) {
      action.callback(action.params)
    } else {
      if (selectedAction) {
        moduleLogger.error(
          { fn: 'handleSubmit' },
          `No callback registered for ${name} '${selectedAction}' action.`,
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
      bg={useColorModeValue('white', '#1A202C')}
      width='100%'
      minHeight='300'
      borderWidth='1'
      borderRadius='xl'
      boxShadow='lg'
    >
      <Box bg={useColorModeValue('gray.300', '#323741')} width='10%' borderLeftRadius='xl'>
        <Center p='4'>
          <Image
            objectFit='contain'
            boxSize='100%'
            src={require('../../assets/token-icons/' + icon)}
          ></Image>
        </Center>
      </Box>
      <Box p='4' width='100%'>
        <Stack direction='column' width='90%' spacing='16px'>
          <Stack direction='row'>
            <Heading justifyContent='left' fontFamily='Inter' fontSize='2xl'>
              {name}
            </Heading>
          </Stack>
          <Divider orientation='horizontal' borderColor='#212631' borderWidth='1px'></Divider>
          <Stack direction='column' spacing='20px'>
            <OutputGroup placeholder={outputPlaceHolder}></OutputGroup>
            {!hasInputField && (
              <Divider orientation='horizontal' borderColor='#212631' borderWidth='1px'></Divider>
            )}
            {!hasInputField && (
              <InputGroup description={'This is a test input description.'}></InputGroup>
            )}
            {/** TODO: Use SelectActionGroup here instead of inlining these components*/}
            <Stack direction='row'>
              <Select
                variant='outline'
                placeholder='Select action'
                borderColor='#212631'
                onChange={handleSelectChange}
                fontSize='sm'
              >
                {[...actions.keys()].map((action, idx) => {
                  return <option value={action}>{action}</option>
                })}
              </Select>
              <Button
                width='15%'
                minWidth='100px'
                bg='#3761F9'
                color='white'
                onClick={handleSubmit}
                fontSize='md'
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}
