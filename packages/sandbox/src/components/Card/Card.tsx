import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Select,
  Spinner,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

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
  symbol?: string
  actions: Record<string, CardActionProps>
  hasInputField?: boolean
}

const moduleLogger = logger.child({ namespace: ['Card'] })

export const Card = ({ name, icon, symbol, actions, hasInputField }: CardProps) => {
  const [outputPlaceHolder, setOutputPlaceHolder] = useState(
    'Select an action from the drop-down menu below.',
  )
  const [selectedAction, setSelectedAction] = useState('')
  const [outputText, setOutputText] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSelectChange = (e: any) => {
    const actionName = e.target.value
    setSelectedAction(actionName)
  }

  useEffect(() => {
    if (selectedAction) {
      setOutputPlaceHolder(actions[selectedAction]?.description || '')
      setOutputText('')
    }
  }, [actions, selectedAction])

  const handleSubmit = async () => {
    const action = actions[selectedAction]
    if (action && action.callback) {
      setLoading(true)
      const ret = await action.callback(action.params)
      if (ret === undefined) {
        toast({
          title: 'Error',
          description: `RPC call for ${selectedAction} failed.`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } else {
        setOutputText(ret)
        toast({
          title: 'Success',
          description: 'See response in output text area.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }
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
    setLoading(false)
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
              {symbol ? `${name} (${symbol})` : name}
            </Heading>
          </Stack>
          <Divider orientation='horizontal' borderColor='#212631' borderWidth='1px'></Divider>
          <Stack direction='column' spacing='20px'>
            <OutputGroup placeholder={outputPlaceHolder} text={outputText}></OutputGroup>
            {hasInputField && (
              <Divider orientation='horizontal' borderColor='#212631' borderWidth='1px'></Divider>
            )}
            {hasInputField && (
              <InputGroup description={'This is a test input description.'}></InputGroup>
            )}
            {/** TODO: Use SelectActionGroup here instead of inlining these components*/}
            <Stack direction='row'>
              <Select
                value={selectedAction}
                variant='outline'
                placeholder='Select action'
                borderColor='#212631'
                onChange={handleSelectChange}
                fontSize='sm'
              >
                {Object.keys(actions).map((action, idx) => {
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
                {loading ? <Spinner /> : 'Submit'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}
