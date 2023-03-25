import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';
import TestThumbnail from '../public/images/Animoji.png';
import Layout from '@/components/layout/article';
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id={'inkdrop'}
              title="Inkdrop"
              thumbnail={TestThumbnail}
            >
              a Test
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
