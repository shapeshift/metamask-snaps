import { Center, Link, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center width='full' height='full'>
      <Text fontSize='xs' fontFamily='Inter' color='#718096'>
        Multi-Chain MetaMask Snap by&nbsp;
        <Link href='https://app.shapeshift.com' fontWeight='bold'>
          ShapeShift.&nbsp;
        </Link>
        The&nbsp;
        <Link href='https://github.com/shapeshift/metamask-snaps' fontWeight='bold'>
          source code&nbsp;
        </Link>
        is provided under the&nbsp;
        <Link href='http://opensource.org/licenses/mit-license.php' fontWeight='bold'>
          MIT&nbsp;
        </Link>
        license.
      </Text>
    </Center>
  )
}
