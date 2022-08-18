import { Button, Select, Stack } from '@chakra-ui/react'
import { ChangeEventHandler, MouseEventHandler } from 'react'

import { CardActionProps } from './Card'

export const SelectActionGroup = ({
  actions,
  selectChangeCallback,
  submitCallback,
}: {
  actions: Map<string, CardActionProps>
  selectChangeCallback: ChangeEventHandler<HTMLSelectElement>
  submitCallback: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <Stack direction='row'>
      <Select
        variant='outline'
        placeholder='Select action'
        borderColor='#212631'
        onChange={selectChangeCallback}
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
        onClick={submitCallback}
        fontSize='md'
      >
        Submit
      </Button>
    </Stack>
  )
}
