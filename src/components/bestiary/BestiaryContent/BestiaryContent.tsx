import CategoryEntry from "../CategoryEntry/CategoryEntry";
import BestiaryEntry from "../BestiaryEntry/BestiaryEntry";
import bestiaryEntriesJson from '../../../data/creatures.json';
import bestiaryCategoriesJson from '../../../data/categories.json';
import type { Category, Creature } from "../../../types/BestiaryTypes";

import './BestiaryContent.css';

const creatures = bestiaryEntriesJson as Creature[];
const categories = bestiaryCategoriesJson as Category[];



function BestiaryContent()
{
    return(
        <div id="bestiary-content" className="bestiary-content">
            {categories.map((category) => {
                if (category.parentCategory !== "") // Ignore subcategories.
                {
                    return null;
                }

                const relatedCreatures = creatures.filter(creature => creature.category === category.name);
                if (relatedCreatures.length === 0) // If a category has no creatures in it, ignore this category.
                {
                    return null;
                }

                return ( // We show the category entry, followed by entries for each creature in this category.
                    <div key={category.name} id={"bestiary-content-category-" + category.plural}>
                        <CategoryEntry
                            key={category.name}
                            entryData={category}
                        />

                        {relatedCreatures.map((creature) => (
                            <BestiaryEntry
                                key={creature.id}
                                entryData={creature}
                            />
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default BestiaryContent;