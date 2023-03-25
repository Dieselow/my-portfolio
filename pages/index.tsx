import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  Image
} from '@chakra-ui/react';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import Layout from '@/components/layout/article';
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home = () => (
  <Layout>
  <Container>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      Hello, I&apos;m an indie app developer based in Japan!
    </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Louis Dumont
        </Heading>
        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/Animoji.png"
          alt="Profile Picture"
        />
      </Box>
    </Box>
    <Section delay={0.1}>
      <Heading as="h3" variant={'section-title'}>
        Work
      </Heading>
      <Paragraph>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Paragraph>
    </Section>
  </Container>
  </Layout>
);

export default Home;
