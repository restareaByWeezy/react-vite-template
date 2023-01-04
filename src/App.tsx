import { wrapper } from './App.css';
import Col from './components/_Grid/Col';
import Row from './components/_Grid/Row';
import Button from './components/Button';
import Text from './components/Text/Text';

const App = () => (
  <div className={wrapper}>
    <Text size="h1">VANILLA EXTRACT BOILERPLATE</Text>
    <Col>
      <Col>col</Col>
      <Col>col</Col>
      <Col>col</Col>
    </Col>
    <Row>
      <Row>row</Row>
      <Row>row</Row>
      <Row>row</Row>
    </Row>
    <Col>
      <Text size="h1">h1</Text>
      <Text size="h2">h2</Text>
      <Text size="h4">h4</Text>
      <Text color="primary">primary</Text>
      <Text color="secondary">secondary</Text>
      <Text color="tertiary">tertiary</Text>
    </Col>
    <Button sizes="sm">small</Button>
    <Button sizes="md">medium</Button>
    <Button sizes="lg">large</Button>
    <Button color="secondary">secondary</Button>
    <Button color="tertiary">tertiary</Button>
  </div>
);

export default App;
