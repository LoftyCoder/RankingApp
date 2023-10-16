
import React, { useState, useEffect } from 'react';
import GameImageArr from "./GameImages.js";

export const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, []);
    return (
        <main>
            <div className="items-not-ranked">
                {
                    (items.length > 0) ?
                        items.map((item) =>
                        <div className="unranked-cell">
                            <img id={`item-${item.id}`} src={GameImageArr.find(p => p.id === item.imageId)?.image} />
                        </div>
                        )
                        :
                        <div>Loading...</div>
                }
            </div>
        </main>

    );
}