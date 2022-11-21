import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, handleDelete }) => {
  const { userId, id, title, body } = post;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.sproutsocial.com/uploads/2022/04/Best-times-to-post-2022_BTTP-Social-Media.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <Link
            to={`/carddetail/${id}`}
            className="hover:text-sky-600 card-title text-center"
          >
            {title.slice(0, 20)} . . .
          </Link>
          <p>{body.slice(0, 100)} . . . </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-error text-white text-bold hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
