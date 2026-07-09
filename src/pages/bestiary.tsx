import { Col, Container, Row } from "react-bootstrap";
import BestiaryEntry from "../components/bestiary/BestiaryEntry/BestiaryEntry";
import BestiarySidebar from "../components/bestiary/BestiarySidebar/BestiarySidebar";
import KMNavbar from "../components/Navbar/Navbar";

import bestiaryEntriesJson from '../data/creatures.json';
import bestiaryCategoriesJson from '../data/categories.json';

import type { Category, Creature } from "../types/BestiaryTypes";


const creatures = bestiaryEntriesJson as Creature[];
const categories = bestiaryCategoriesJson as Category[];

function BestiaryPage() {
    return (
        <div>
            <KMNavbar/>

            <Container fluid>
                <Row>
                    <Col md={2}>
                        <BestiarySidebar breakpoint={'lg'}/>
                    </Col>

                    <Col>
                        <div>
                            {creatures.map((creature) => (
                                <BestiaryEntry
                                    key={creature.id}
                                    entryData={creature}
                                />
                            ))}
                        </div>
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