import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layout/article';

const Work = ({}) => (
  <Layout title={'Inkdrop'}>
    <Container>
      <Title>
        Inkdrop
        <Badge>2016</Badge>
      </Title>
      <Paragraph>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida et
        metus sed laoreet. Vestibulum pretium vehicula aliquet. Ut sagittis
        hendrerit felis sit amet rhoncus. Proin consectetur est nulla, in
        porttitor odio vehicula nec. Nam rhoncus rhoncus velit, venenatis
        venenatis est convallis ac. Vestibulum in lacinia nulla. Donec ut
        imperdiet diam, vitae maximus elit. Praesent eget purus dignissim,
        rutrum mauris vitae, accumsan augue. Nullam sed nisl et purus suscipit
        hendrerit. Aenean feugiat lacus sit amet dignissim consectetur. Sed ut
        lacus ut nulla laoreet aliquam. Vivamus eu odio tempor enim varius
        dictum. Donec purus quam, tincidunt ac ex at, interdum molestie nisl.
        Vivamus condimentum neque est, in auctor ipsum porta quis. Nullam
        vehicula odio turpis. Vivamus ut lectus augue
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://google.com">
            google.com <ExternalLinkIcon mx={'2px'} />{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOs</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
      </List>
      <WorkImage src="/images/..." alt="Inkdrop" />
    </Container>
  </Layout>
);

export default Work;
