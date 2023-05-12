import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Projects() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/resources/Atizapan.png" />
        <Card.Body>
          <Card.Title>Atizapan te informa</Card.Title>
          <Card.Text>
          Atizapán te informa": App development School project I made in college for the municipalty of Atizapán. It had a duration of 3 months involved android studio, third party APIs 
          (Google Maps), flask identification and deployment.
          </Card.Text>
          <Card.Link href="https://github.com/YrandaNova/AtizapanTe-informa">Project Link</Card.Link>
          <Card.Link href="https://studio.youtube.com/video/AZGHkoCe2VU/edit">Video link</Card.Link>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/resources/Jerbo.png" />
        <Card.Body>
          <Card.Title>Jerbo</Card.Title>
          <Card.Text>
          "Jerbo": Platformer video game, in which I programmed in C#,
          made a basic webpage using CSS and HTML that contained,
          data obtained from a database (XAMPP, MySQL) and permitted its
          visualization with PHP, queries, google chart API. The
          webpage was hosted for 3 months with the service Digital
          ocean.
          </Card.Text>
          <Card.Link href="https://github.com/Nadia145/Jerbo">Project Link</Card.Link>
          <Card.Link href="https://github.com/YrandaNova/JerboWebPage">Project Link</Card.Link>
          <Card.Link href="https://www.youtube.com/watch?v=-D-hIKdBtxU">video Link</Card.Link>
        </Card.Body>
        <Card.Footer>
       
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/resources/redes.png" />
        <Card.Body>
          <Card.Title>Network design</Card.Title>
          <Card.Text>
          Network design: This project involved designing and configuring a network
           with all the basic security protocols, such as configuring ports, switches, and routers.
           It was my first introduction to networks and how the internet works.
          </Card.Text>
          <Card.Link href="https://github.com/YrandaNova/red-reto">Project Link</Card.Link>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Projects;