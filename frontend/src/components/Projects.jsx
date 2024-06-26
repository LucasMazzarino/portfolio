import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gem from "../assets/img/gem.jpg";
import sparta from '../assets/img/sparta.jpg';

export const Projects = () => {

  const projects = [
    {
      title: "Gemstone Uruguay",
      description: "This project was developed for Gemstone Uruguay, a jewelry store in Uruguay. Developed using 100% Typescript",
      imgUrl: gem,
      url: "https://github.com/LucasMazzarino/Gemstone",
      labels: ["React","Next.js", "TypeScript", "Payload CMS", "Express.js" , "tRPC", "Mongodb", "Zustand", "Tailwind"]
    },
    {
      title: "Sparta Gym",
      description: "Custom Software for Comprehensive Gym Managemen. This custom software was developed to provide complete administration for a gym",
      url: "https://github.com/LucasMazzarino/Gestion-sparta-gym",
      imgUrl: sparta,
      labels: ["Python", "Django", "Django Rest Framework", "JavaScript", "React", "Redux", "PostgreSQL"]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Some of the most intriguing projects I've developed, both for clients and personal endeavors.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className="cont">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}