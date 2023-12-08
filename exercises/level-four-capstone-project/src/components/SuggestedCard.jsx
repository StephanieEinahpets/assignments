import React from "react";

const SuggestedCard = (props) => {
  const suggestion = props.suggestion

  return (
    <div key={suggestion.myanimelist_id} className="recoCard">
        <div className="oneReco">
          <img src={suggestion.picture_url} className="recoImg"/>
          <h3>{suggestion.title}</h3>
        </div>
        <div className="twoReco">
          <img src={suggestion.picture_url2} className="recoImg"/>
          <h3>{suggestion.title2}</h3>
        </div>
        <p className="recoDescription">{suggestion.description}</p>
        <hr className="gradient"></hr>
    </div>
  );
};

export default SuggestedCard

