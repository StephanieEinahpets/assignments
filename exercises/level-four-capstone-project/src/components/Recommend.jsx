import React, { useState } from "react";
import axios from "axios";
import SuggestedCard from "./SuggestedCard";

export default function Recommend() {
  const [inputValue, setInputValue] = useState("")
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    try {
      setLoading(true)
      const searchOptions = {
        method: 'GET',
        url: 'https://myanimelist.p.rapidapi.com/v2/anime/search',
        params: {
          q: `${inputValue}`
        },
        headers: {
          'X-RapidAPI-Key': '571488dc82msh1f630aaacf7ab17p1c0b5djsn9020deb6bed8',
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'   
        }
      }
      const searchResponse = await axios.request(searchOptions)

      if (searchResponse.data && searchResponse.data.length > 0) {
        const myanimelistId = searchResponse.data[0].myanimelist_id
        
        const recommendationsOptions = {
        method: 'GET',
        url: 'https://myanimelist.p.rapidapi.com/v2/anime/recommendations',
        params: { p: `${myanimelistId}` },
        headers: {
          'X-RapidAPI-Key': '571488dc82msh1f630aaacf7ab17p1c0b5djsn9020deb6bed8',
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
      }
      const recommendationsResponse = await axios.request(recommendationsOptions)
      setResponse(recommendationsResponse.data.recommendations)
      console.log(recommendationsResponse.data.recommendations)
    } else {
      console.log('No results found')
      setResponse([]);
    }
  } catch (error) {
    console.error(error)
  }  finally {
      setLoading(false)
  }
}
 

return (
  <>
    <h1>Get Anime Recommendations</h1>
    <h5>Find Anime Suggestions based on what you like</h5>
    <div>
      <input
        type="text"
        placeholder="Enter anime name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name="recoInput"
      />
      <button onClick={handleClick} disabled={loading} className="btn">{loading ? 'Loading...' : 'Get Suggestions'}</button>
    </div>


    {response.length > 0 && response.map((recommendation, index) => {
        return (
          <SuggestedCard
            key={index}
            suggestion={{
              title: recommendation.liked.title,
              picture_url: recommendation.liked.picture_url,
              title2: recommendation.recommendation.title,
              picture_url2: recommendation.recommendation.picture_url,
              description: recommendation.description,
            }}
          />
      )
    })}
  </>
);
}












  // async function handleClick() {
  //   try {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://anime-recommender.p.rapidapi.com/',
  //       params: {
  //         anime_title: inputValue,
  //         number_of_anime: '5'
  //       },
  //       headers: {
  //           'x-rapidapi-host': 'anime-recommender.p.rapidapi.com',
  //           'x-rapidapi-key': '571488dc82msh1f630aaacf7ab17p1c0b5djsn9020deb6bed8'
  //       }
  //     };

//   const response = await axios.request(options);
//   setResponse(response.data)
//   console.log(response.data)
// } catch (error) {
//   console.error("Error fetching recommendations:", error);
// }


//render
{/* 
      {response && response.length > 0 && response.map((suggestion) => {
          return (
            <SuggestedCard
              key={suggestion.id}
              suggestion={{
                ...suggestion,
                description: description,
              }}
            />
          )
        })} */}