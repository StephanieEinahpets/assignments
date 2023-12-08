import React, { useState } from "react"
import axios from "axios"

export default function About() {

    const [inputData, setInputData] = useState([])
    const [animeInfo, setAnimeInfo] = useState([])
    const [loading, setLoading] = useState(false)


    async function handleClick() {
        try {
            setLoading(true)
          const options = {
            method: 'GET',
            url: 'https://myanimelist.p.rapidapi.com/v2/anime/search',
            params: {
              q: `${inputData}`
            },
            headers: {
              'X-RapidAPI-Key': '571488dc82msh1f630aaacf7ab17p1c0b5djsn9020deb6bed8',
              'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'   
            }
          }
          const response = await axios(options)
          setAnimeInfo(response.data)
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching anime data:", error)
        } finally {
           setLoading(false)
        }
      }
       

    return(
        <>
            <h1>Search Anime</h1>
            <h5>Search for information on a specific Anime</h5>
            <div>
                <input
                    type="text"
                    placeholder="Enter Anime Name..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    name="searchInput"
                    />
                <button onClick={handleClick} disabled={loading} >{loading ? 'Searching...' : 'Go'}</button>
            </div>

            {animeInfo.map((anime) => (
                <div key={anime.myanimelist_id} className="searchContainer" >
                    <h2 className="searchTitle">{anime.title}</h2>
                    <img src={anime.picture_url} className="searchImg"/>
                    <h3 className="searchInfo">{anime.description}</h3>
                </div>
            ))}
        </>
    )
}
