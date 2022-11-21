import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const post = useLoaderData();
  const { userId, id, title, body } = post;

  const [comments, setComments] = useState([]);

  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, [id]);

  const postComments = comments.filter((comment) => comment.postId === id);

  return (
    <div className="mt-3 px-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-purple-900 ">
        Posts Details
      </h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.sproutsocial.com/uploads/2022/04/Best-times-to-post-2022_BTTP-Social-Media.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Author: {author.name}</button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center m-10 text-purple-500 ">
        Comments
      </h1>

      <div className="">
        {postComments.map((comment) => (
          <p className="mb-3" key={comment.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-cyan-700	">{comment.body}</h2>
                <p className="text-cyan-500">{comment.email}</p>
              </div>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
