function FeedBackCard({id, title, upvote, downvote, handleIncrement, handleDecrement,index}){
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>{title}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15 upvote" data-testid={`upvote-btn-${index}`} onClick={() => handleIncrement(id)}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 downvote" data-testid={`downvote-btn-${index}`} onClick={ () => handleDecrement(id)}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
            Upvotes: <strong>{upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
            Downvotes: <strong>{downvote}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
export default FeedBackCard;