import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function HorizontalVerticalRulesExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Link to="/Home" className="p-2">UOP</Link>
      <Link to="/Login" className="p-2 ms-auto">Login</Link>
      <div className="vr" />
      <Link to="/Signup" className="p-2">Signup</Link>
      
    </Stack>
  );
}

export default HorizontalVerticalRulesExample;