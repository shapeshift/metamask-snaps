import { Button } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

export type SideBarItemProps = {
  text: string
  route: string
}

export const SideBarItem = ({ route, text }: SideBarItemProps) => {
  const location = useLocation()
  return (
    <Link to={route}>
      <Button
        width='100%'
        justifyContent='flex-start'
        variant='ghost'
        isActive={location.pathname === `/${route}`}
        color='#718096'
      >
        {text}
      </Button>
    </Link>
  )
}
