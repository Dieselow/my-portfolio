import { Container, GridItem, Heading, SimpleGrid} from '@chakra-ui/react';
import Layout from '@/components/layout/article';
import Section from '@/components/section';

const Link = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular posts
            </Heading>
        </Container>
        <Section delay={0.1}>
            <SimpleGrid column={[1,2,2]} gap={6}>
                <GridItem title='My test workflow'>
                    
                </GridItem>
            </SimpleGrid>
        </Section>
    </Layout>
)
