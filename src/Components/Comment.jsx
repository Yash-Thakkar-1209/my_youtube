import React from "react";

const Comment = ({ data }) => {
  const { user, comment } = data;
  return (
    <div className="flex items-center m-5">
      <img
        className="h-14 w-14"
        src="https://tse4.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&P=0&h=180"
        alt=""
      />
      <div className="m-2">
        <h1 className="font-bold">{user}</h1>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
