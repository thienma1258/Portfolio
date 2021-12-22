import { Container,Row,Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialSection = () => {
  const owner = useSelector((state) => state.owner);
  const mailTo = "mailTo:" + owner.email;
  return (
    <section>
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
              <a href={mailTo}> {owner.email}]</a>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={owner.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={owner.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={owner.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialSection;
