import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Cabins() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://ewfbnthuhteqagzyuxke.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
