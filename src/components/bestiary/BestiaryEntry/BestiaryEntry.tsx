import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import type { Creature } from '../../../types/BestiaryTypes';
import './BestiaryEntry.css'


import { GetImage } from "../../../utility/ImageImporter";
import { SanitiseString } from '../../../utility/StringUtilities';

function BestiaryEntry({entryData}: {entryData: Creature}) {
    return (
        <div id={"bestiary-" + SanitiseString(entryData.name)} className='bestiary-entry anchor'>
            <h2>{entryData.name}</h2>
            <Row>
                <Col>
                    <h4>{entryData.size} {entryData.type} ({entryData.category})</h4>
                    <p>{entryData.overview}</p>

                    <h4>Strengths</h4>
                    <p>{entryData.strengths}</p>

                    <h4>Weaknesses</h4>
                    <p>{entryData.weaknesses}</p>

                    <h4>Peculiarities</h4>
                    <p>{entryData.features}</p>

                    <h4>Lures</h4>
                    <p>{entryData.lures}</p>

                    <h4>Ingredients & Materials</h4>
                    <p>{entryData.harvesting}</p>
                </Col>

                <Col>
                    <Image src={GetImage(entryData.image)} />
                </Col>

                <div>
                    <h4>Lore</h4>
                    <p>{entryData.lore}</p>
                </div>
            </Row>
        </div>
    );
}

export default BestiaryEntry;