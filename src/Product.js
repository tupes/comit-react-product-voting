import React,{useState} from "react";

export default function Product(props) {
  const [vote, setVote] = useState(props.vote);
  const handleClick = () => {
      setVote(vote+1);
  }
  return (
    <div className="flex">
      <div className="img">
        <img src="" />
      </div>
      <div>
        <div>
          <span className="triangle" onClick={handleClick}>▲</span>
          <span className="number">{vote}</span> {/*vote is a property*/}
          <div className="author">
            <br></br>
            <a>Fort Knight</a>
          </div>
          <p className="description">Authentic renaissance actors, delivered in just two weeks.</p>
        </div>
        <br></br>
        <div className="flex">
          <div className="submit">Submitted by:</div>
          <img className="avatar" src={props.avatar} /> {/*avatar is a property*/}
        </div>
      </div>
    </div>
  );
}
