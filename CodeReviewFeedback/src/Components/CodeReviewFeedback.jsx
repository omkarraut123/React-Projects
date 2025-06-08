import React, { useState } from "react";
import FeedBackCard from "./FeedBackCard";
const initialValues = [
  {id: "readability",title: "Readability",upvote: 0, downvote: 0},
  {id: "performance",title: "Performance",upvote: 0, downvote: 0},
  {id: "security",title: "Security",upvote: 0, downvote: 0},
  {id: "Documentation",title: "Documentation",upvote: 0, downvote: 0},
  {id: "Testing",title: "Testing",upvote: 0, downvote: 0},
];

const FeedbackSystem = () => {
  const [data, setData] = useState(initialValues);

  function handleIncrement(id){
    const indexForUpdate = data.findIndex((item) => item.id === id);
    if(indexForUpdate >= 0){
    let item = data[indexForUpdate];   
    const preparedItem = { ...item, upvote: item.upvote + 1 }
    let newDataToUpdate = [...data];
    newDataToUpdate[indexForUpdate] = preparedItem;
    setData(newDataToUpdate);
    }
  }
  function handleDecrement(id){
    const indexForUpdate = data.findIndex((item) => item.id === id);
    if(indexForUpdate >= 0){
    let item = data[indexForUpdate];
    const preparedItem = { ...item, downvote: item.downvote + 1 }
    let newDataToUpdate = [...data];
    newDataToUpdate[indexForUpdate] = preparedItem;
    setData(newDataToUpdate);
    }
  }
  
  return (
    data.map((item, index) => {
      return (
        <FeedBackCard id={item.id} title={item.title} upvote={item.upvote} downvote={item.downvote} handleIncrement={handleIncrement} handleDecrement={handleDecrement} index={index}/>
      );
    })
  );
  };

export default FeedbackSystem;
