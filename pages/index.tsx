import { Container,Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <Box borderRadius={"lg"} bg="red" p={3} mb={6} alignContent="center">
          Hello I&apos;m a software developper in Canada with a software architecture formation
        </Box>
        <Box display={{"md": "flex"}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant={"page-title"}>
              Louis Dumont
            </Heading>
          </Box>
        </Box>
      </Container>
    </>
  );
}
