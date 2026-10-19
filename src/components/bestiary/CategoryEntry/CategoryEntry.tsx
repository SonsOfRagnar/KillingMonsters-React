import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import type { Category } from '../../../types/BestiaryTypes';
import './CategoryEntry.css'

import { GetImage } from "../../../utility/ImageImporter";
import { SanitiseString } from '../../../utility/StringUtilities';

function CategoryEntry({entryData} : {entryData: Category}) {
    return(
        <div id={"bestiary-" + SanitiseString(entryData.plural)} className='category-entry'>
            <h1 className='category-header-1'>{entryData.plural}</h1>
            <Row>
                <Col>
                    <Image src={GetImage(entryData.image)} />
                </Col>

                <Col>
                    <p>{entryData.overview}</p>
                </Col>

            </Row>
        </div>
    );
}

export default CategoryEntry;