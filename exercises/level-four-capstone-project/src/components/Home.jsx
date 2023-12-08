import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Home() {



    const [items, setItems] = useState([])
    console.log(items)

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/trending/anime")
                .then(response => setItems(response.data.data))
                .catch(error => console.log(error))
        }, [])

    return(
    <>
        <h1>Trending Anime</h1>
        <section className="trending">
        {items.map((item) => (
          <div className="trendingCard" key={item.id}>
            <h3>{item.attributes.canonicalTitle}</h3>
            <img src={item.attributes.posterImage.original} className="trendImg"/>
            <h6>{item.attributes.description}</h6>
          </div>
        ))}
        </section>
    </>
    )
}