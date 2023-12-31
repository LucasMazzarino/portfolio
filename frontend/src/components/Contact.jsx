import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import correo from "../assets/img/correo.svg";
import 'animate.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formDetails.firstName || !formDetails.lastName || !formDetails.email) {
  //     setStatus({
  //       success: false,
  //       message: 'Please fill in all required fields.',
  //     });
  //     return;
  //   }

  //   setButtonText("Sending...");

  //   try {
  //     // const apiUrl = import.meta.env.VITE_URL || 'http://localhost:3000 https://absurd-coil-production.up.railway.app/mail';
  //     const response = await fetch(`http://localhost:3000/mail`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formDetails),
  //     });

  //     if (response.ok) {
  //       setFormDetails(formInitialDetails);

  //       setStatus({ success: true, message: 'Message sent successfully' });
  //     } else {
  //       setStatus({ success: false, message: 'Something went wrong, please try again later.' });
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     setStatus({ success: false, message: 'Error sending email. Please try again later.' });
  //   } finally {
  //     setButtonText("Send");
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={correo} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <div >
                <h2>Get In Touch</h2>
                <form action="https://formsubmit.co/bf61624e3192330f19e55e58fb239566" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" value={formDetails.firstName} class="form-control" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lastName} class="form-control" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} class="form-control" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} class="form-control" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} class="form-control" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <input type="hidden" name="_captcha" value="false"></input>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}