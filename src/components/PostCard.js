import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { userId, id, title, body } = post;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Link to={`/carddetail/${id}`} className="card-title text-center">
            {title.slice(0, 20)} . . .
          </Link>
          <p>{body.slice(0, 100)} . . .</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
