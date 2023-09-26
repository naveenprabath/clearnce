import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Stackl() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Link to="/Home" className="p-2">UOP</Link>
      <Link to="/Demo" className="p-2 ms-auto">Demo</Link>
      <div className="vr" />
      <Link to="/Dema" className="p-2">Dema</Link>
      
    </Stack>
  );
}

export default Stackl;