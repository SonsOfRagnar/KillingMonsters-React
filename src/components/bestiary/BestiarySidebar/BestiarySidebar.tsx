import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

import bestiaryEntriesJson from '../../../data/creatures.json';
import bestiaryCategoriesJson from '../../../data/categories.json';
import type { Category, Creature } from "../../../types/BestiaryTypes";
import { SanitiseString } from '../../../utility/StringUtilities';

import './BestiarySidebar.css'

const creatures = bestiaryEntriesJson as Creature[];
const categories = bestiaryCategoriesJson as Category[];


function BestiarySidebar({ breakpoint } : {breakpoint : string}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function ScrollToEntry(entryId: string) {
        document.getElementById(entryId)
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Group up creatures by category for optimal list generation.
    const creaturesByCategory = creatures.reduce((groups, creature) => {
        (groups[creature.category] ??= []).push(creature);
        return groups;
        }, {} as Record<string, Creature[]>);

    //console.log(creaturesByCategory);

    return(
        <div className='bestiary-sidebar'>
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
                                    <li key={category.name}>
                                        <Button onClick={() => ScrollToEntry("bestiary-" + SanitiseString(category.name))}>{category.name}</Button>

                                        <ul>
                                            {creaturesByCategory[category.name]?.map((creature) => (
                                                <li key={creature.id}>
                                                    <Button onClick={() => ScrollToEntry("bestiary-" + SanitiseString(creature.name))}>{creature.name}</Button>
                                                </li>    
                                            ))}
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
        </div>
    );
}

export default BestiarySidebar;