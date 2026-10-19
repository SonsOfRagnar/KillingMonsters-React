import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import type { Creature } from '../../../types/BestiaryTypes';
import './BestiaryEntry.css'


import { GetImage } from "../../../utility/ImageImporter";
import { SanitiseString } from '../../../utility/StringUtilities';

function BestiaryEntry({entryData}: {entryData: Creature}) {
    return (
        <div id={"bestiary-" + SanitiseString(entryData.name)} className='bestiary-entry'>
            <h2 className='bestiary-header-2'>{entryData.name}</h2>
            <Row>
                <Col>
                    <h4 className='bestiary-header-4'>{entryData.size} {entryData.type} ({entryData.category})</h4>
                    {entryData.overview.split(/\r?\n/).map((paragraph, index) => 
                        <p key={"overview-" + index}>{paragraph}</p>
                    )} 

                    <h4 className='bestiary-header-4'>Strengths</h4>
                    {entryData.strengths.split(/\r?\n/).map((paragraph, index) => 
                        <p key={"strengths-" + index}>{paragraph}</p>
                    )} 

                    <h4 className='bestiary-header-4'>Weaknesses</h4>
                    {entryData.weaknesses.split(/\r?\n/).map((paragraph, index) => 
                        <p key={"weaknesses-" + index}>{paragraph}</p>
                    )} 

                    <h4 className='bestiary-header-4'>Peculiarities</h4>
                    {entryData.features.split(/\r?\n/).map((paragraph, index) => 
                        <p key={"features-" + index}>{paragraph}</p>
                    )} 

                    <h4 className='bestiary-header-4'>Lures</h4>
                    <ul>
                        {entryData.lures.split(/\r?\n/).map(lure => 
                            <li key={lure}>{lure}</li>
                        )}                        
                    </ul>

                    <h4 className='bestiary-header-4'>Ingredients & Materials</h4>
                    <ul>
                        {entryData.harvesting.split(/\r?\n/).map(ingredient => 
                            <li key={ingredient}>{ingredient}</li>
                        )}                        
                    </ul>
                </Col>

                <Col>
                    <Image src={GetImage(entryData.image)} />
                </Col>

                <div>
                    <h4 className='bestiary-header-4'>Lore</h4>
                    {entryData.lore.split(/\r?\n/).map((paragraph, index) => 
                        <p key={"lore-" + index}>{paragraph}</p>
                    )} 
                </div>
            </Row>
        </div>
    );
}

export default BestiaryEntry;