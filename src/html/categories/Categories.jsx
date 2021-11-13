import { Nav, Navbar, Container, } from 'react-bootstrap';
import "../../css/categories/Categories.css";
function Categories(){
    return(
        <>
        <div style={{zIndex:"5"}}>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginLeft:"auto",fontSize:'10px',padding:'0.10rem 0.30rem',color:'rgb(83, 83, 83)',border:'3px solid',backgroundColor:'rgb(83, 83, 83)'}} />
  <Navbar.Collapse  id="responsive-navbar-nav" style={{justifyContent:'center',alignItems:'center'}} >
    
    <div className="cat">
      <Nav>
      <Nav.Link href="" style={{marginLeft:'auto',marginRight:'auto'}}><p>HTML 5</p></Nav.Link>
      <Nav.Link href="" style={{marginLeft:'auto',marginRight:'auto'}}><p>Responsive</p></Nav.Link>
      <Nav.Link href="" style={{marginLeft:'auto',marginRight:'auto'}}><p>Bootstrap</p></Nav.Link>
      <Nav.Link href="" style={{marginLeft:'auto',marginRight:'auto'}}><p>Wordpress</p></Nav.Link>
      <Nav.Link href="" style={{marginLeft:'auto',marginRight:'auto'}}><p>Psd</p></Nav.Link>
      <Nav.Link href="" style={{marginLeft:'auto',marginRight:'auto'}}><p>Tailwind</p></Nav.Link>
      </Nav>
    </div>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>

            {/* <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'rgb(24, 24, 24)'}} variant="dark">
  <Container>
  <div className="logo-cont"><Navbar.Brand href="#home"><img src="./Images/logo.svg" className="logo" /></Navbar.Brand></div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{fontSize:'10px',padding:'0.10rem 0.30rem '}} />
  <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'center',alignItems:'center'}}>
    <div className="tab">
    <Nav>
      <Nav.Link href="" style={{fontSize:'18px',marginLeft:'auto',marginRight:'auto',marginTop:'-5px'}}></Nav.Link>
      <Nav.Link eventKey={0} style={{marginLeft:'auto',marginRight:'auto'}} href=""></Nav.Link>
      <Nav.Link eventKey={0} style={{marginLeft:'auto',marginRight:'auto'}} href="#memes"></Nav.Link>
      <Nav.Link eventKey={0} style={{marginLeft:'auto',marginRight:'auto'}} href="#memes"></Nav.Link>
    </Nav>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
        </>
    );
}
export default Categories;