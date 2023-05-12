import '../styles/Inicio.css'
import Nav from 'react-bootstrap/Nav';
import Navigation from '../components/new';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardText from '../components/cards';
import Projects from '../components/Aboutme';

const Inicio=()=>{
    return (
        <>
     <Navigation/>

     <section id="Home">           
            <img src="/resources/stars.png" className="stars" id ="stars"></img>
            <img src="/resources/fondo.png" className="fondo" id ="fondo"></img>
            <img src="/resources/lunafinchiquita.png" className="luna" id ="luna"></img>
        <Container className='d-flex justify-content-center'>
            <Row className='texto'>
            <h2 className='textos' >Mayra Fernanda Camacho Rodriguez</h2>
            <h2 style={{color:'#fff'}}>Software Engineer</h2>
            </Row>
            </Container>

        </section>

        <Container id="About" className='d-flex justify-content-center container'>
        <CardText/>
        </Container>

        <Container className='projects '>
            <h2 style={{color:'#fff'}} className="d-flex justify-content-center" id="My_projects" >My Projects: </h2>
            <Projects/>

            
        </Container>

        <Container className='Contact'>
            <h2 style={{color:'#fff'}} className="d-flex justify-content-center" id="Contact" >Contact </h2>
          
          <div className='d-flex justify-content-center'>
           <a className='contacto' href="https://github.com/YrandaNova">Github</a>
           <a className='contacto' href="https://www.linkedin.com/in/mayra-camacho-rodriguez/">Linkedin</a>
           <a className='contacto' href="/resources/cv_mayrafcr_EN_General-documento.docx(2).pdf">CV</a>
           

           </div>
        </Container>

        <Container className=' d-flex justify-content-center'>

        <p><a href="https://www.freepik.com/free-vector/cosmic-background-alien-planet-deserted-landscape-with-mountains_13924256.htm#&position=3&from_view=undefined">Image by upklyak</a> on Freepik</p>


        </Container>




       


        </>
            )
        }

        export default Inicio;
