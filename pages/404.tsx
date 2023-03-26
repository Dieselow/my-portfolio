import NextLink from 'next/link';
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Button,
  Center
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The Page you were looking for was not found</Text>
      <Divider my={6} />

      <Box my={6}>
        <Center>
          <NextLink href="/">
            <Button colorScheme={'teal'}>Return to Home</Button>
          </NextLink>
        </Center>
      </Box>
    </Container>
  );
};
export default NotFound;
