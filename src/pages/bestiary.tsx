import { Col, Container, Row } from "react-bootstrap";
import BestiaryEntry from "../components/bestiary/BestiaryEntry/BestiaryEntry";
import BestiarySidebar from "../components/bestiary/BestiarySidebar/BestiarySidebar";
import KMNavbar from "../components/Navbar/Navbar";

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
                        <BestiaryEntry/>
                        <BestiaryEntry/>
                        <BestiaryEntry/>
                        <BestiaryEntry/>
                    </Col>

                    <Col md={2}>
                        Filler
                    </Col>
                </Row>
            </Container>



            {/* <div className="container-fluid main-container">
                <div className="row justify-content-start">
                    
                    <div id="bestiary-sidebar-col" className="col-2 collapse d-lg-block test-border">

                        <aside id="bestiary-sidebar" className="bd-sidebar">
                            
                            <div className="bestiary-offcanvas offcanvas-lg offcanvas-start" id="offcanvasResponsive-bestiary" aria-labelledby="offcanvasResponsiveLabel">
                                <div className="offcanvas-header" data-bs-theme="dark" >
                                    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Bestiary Index</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive-bestiary" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">

                                    <nav className="bd-links w-100" aria-label="Docs navigation">

                                    <ul id="bestiary-sidebar-list" className="list-unstyled">

                                        <li>
                                        <a href="#bestiary-cursed-ones" className="bestiary-link-heading rounded">
                                            <strong>Cursed Ones</strong>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li>
                                            <a href="#bestiary-werewolf" className="bestiary-link d-inline-block rounded" > Werewolf</a>
                                            </li>
                                            <li>
                                            <a href="#bestiary-werewolf1" className="bestiary-link d-inline-block rounded"> Test Cursed One 1</a>
                                            </li>
                                            <li>
                                            <a href="#bestiary-werewolf2" className="bestiary-link d-inline-block rounded"> Test Cursed One 2</a>
                                            </li>
                                            <li>
                                            <a href="#bestiary-werewolf3" className="bestiary-link d-inline-block rounded"> Test Cursed One 3</a>
                                            </li>
                                        </ul>
                                        </li>

                                        <li>
                                        <a href="#bestiary-draconids" className="bestiary-link-heading rounded">
                                            <strong>Draconids</strong>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li>
                                            <a href="#bestiary-wyvern" className="bestiary-link d-inline-block rounded"> Wyvern</a>
                                            </li>
                                            <li>
                                            <a href="#bestiary-wyvern1" className="bestiary-link d-inline-block rounded"> Test Draconid 1</a>
                                            </li>
                                            <li>
                                            <a href="#bestiary-wyvern2" className="bestiary-link d-inline-block rounded"> Test Draconid 2</a>
                                            </li>
                                            <li>
                                            <a href="#bestiary-wyvern3" className="bestiary-link d-inline-block rounded"> Test Draconid 3</a>
                                            </li>
                                        </ul>
                                        </li>

                                    </ul>



                                    </nav>

                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="col test-border">
                        <main id="bestiary-entries" className="main-content bestiary-entry-container h-100 order-1" data-bs-spy="scroll" data-bs-target="#bestiary-sidebar" data-bs-smooth-scroll="false">
                            
                            <div id="bestiary-intro" className="bestiary-entry">
                            <h1 className="bestiary-heading1">Bestiary</h1>
                            <p id="bestiary-intro-text">
                                Herin is set down the sum of our knowledge on the creatures, both natural and preternatural, that we have encountered on our travels. Included where possible are depictions of their likenesses, observations of their form, behaviours, strengths, weaknesses, etc. What lore we know has been recorded also, along with all manner of local folklore and superstition, which may harbour within it some grain of truth that may be of use.
                            </p>
                            </div>

                            <BestiaryEntry/>
                            <BestiaryEntry/>
                            <BestiaryEntry/>

                        </main>
                    </div>

                    <div className="col-2 d-none d-lg-block test-border">
                    </div>

                </div>
            </div> */}

        </div>
    );
}

export default BestiaryPage;