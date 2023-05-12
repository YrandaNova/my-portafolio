import Card from 'react-bootstrap/Card';
import '../styles/Inicio.css'

function CardText() {

  return(
    <Card border='dark' style={{width:'58rem'}}>
     <Card.Body>
        <Card.Title style={{fontSize:'40px'}} className='cardtitle'>About me</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        My name is Mayra Fernanda Camacho Rodriguez, and I am a 23-year-old engineering student at the Instituto Tecnologico y 
        de Estudios Superiores Monterrey. I have a deep interest in learning new things and consider myself to be a great 
        self-learner. In my free time, I enjoy playing
         video games, drawing, and teaching myself new skills, such as 3D rendering 
        and crocheting, which are the things I am currently learning.
        I am fluent in English, Spanish, and have some knowledge of French
         and basic German. My dream is to become a polyglot and a full-stack engineer. I want to learn as much as possible about a
          wide range of topics. My ideal job would allow me to engage in projects that enable me to both refine my existing skills and
           develop new ones. I am passionate about learning, 
        meeting new people, and bringing new projects to life.


        </Card.Text>
        </Card.Body>
        </Card>

)   

}

export default CardText;