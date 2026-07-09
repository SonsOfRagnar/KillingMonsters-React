import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

import bestiaryEntriesJson from '../../../data/creatures.json';
import bestiaryCategoriesJson from '../../../data/categories.json';
import type { Category, Creature } from "../../../types/BestiaryTypes";


const creatures = bestiaryEntriesJson as Creature[];
const categories = bestiaryCategoriesJson as Category[];


function BestiarySidebar({ breakpoint } : {breakpoint : string}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                Bestiary Index
            </Button>

            <Offcanvas show={show} onHide={handleClose} responsive={breakpoint}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Bestiary Index</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <nav className="bd-links w-100" aria-label="Docs navigation">

                        <ul>
                            {categories.map((category) => 
                                category.parentCategory.length == 0 ? (
                                    <li>
                                        <a href="#bestiary-cursed-ones" className="bestiary-link-heading rounded"> {category.name} </a>

                                        <ul>
                                            {creatures.map((creature) => 
                                                creature.category == category.name ? (
                                                    <a href="#bestiary-cursed-ones" className="bestiary-link-heading rounded"> {creature.name} </a>
                                                ) : (
                                                    null
                                                )
                                            )}
                                        </ul>
                                    </li>
                                ) : (
                                    null
                                )
                            )}
                        </ul>
                        
                    </nav>
                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default BestiarySidebar;