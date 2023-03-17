import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
font-weight:bold;
font-size: 18px;
display: align-flex:
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg)
}`;

export default function Logo() {
  return (
    <Link href={'/'}>
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily={'M PLUS Rounded 1c'}
          fontWeight={'bold'}
          ml={3}
        >
          Louis Dumont
        </Text>
      </LogoBox>
    </Link>
  );
}
