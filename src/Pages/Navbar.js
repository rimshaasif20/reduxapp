
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <BootstrapNavbar  className='container'>
      <BootstrapNavbar.Brand as={NavLink} to="/" style={{marginLeft:'10px',fontSize:'1.7rem',fontWeight:'bold'}}>AppsGenii Employees</BootstrapNavbar.Brand>
      <Nav className="mr-auto navbar">
        <Nav.Link as={NavLink} to="/" className="nav">Users</Nav.Link>
        <Nav.Link as={NavLink} to="/list" className="nav">List</Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
