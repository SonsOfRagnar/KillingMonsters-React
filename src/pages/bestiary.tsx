import { Col, Container, Row } from "react-bootstrap";
import BestiarySidebar from "../components/bestiary/BestiarySidebar/BestiarySidebar";
import KMNavbar from "../components/Navbar/Navbar";
import BestiaryContent from "../components/bestiary/BestiaryContent/BestiaryContent";
import '../App.css';

function BestiaryPage() {
    return (
        <div className="page bestiary-page">
            <KMNavbar/>

            <Container fluid>
                <Row>
                    <Col md={2}>
                        <BestiarySidebar breakpoint={'lg'}/>
                    </Col>

                    <Col>
                        <BestiaryContent/>
                    </Col>

                    <Col md={2}>
                        Filler
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BestiaryPage;