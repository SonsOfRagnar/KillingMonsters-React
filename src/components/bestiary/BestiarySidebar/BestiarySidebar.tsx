import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function BestiarySidebar({ breakpoint } : {breakpoint : string}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose} responsive={breakpoint}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
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
                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default BestiarySidebar;