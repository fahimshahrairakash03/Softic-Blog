import React from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const post = useLoaderData();
  const { userId, id, title, body } = post;
  return (
    <div className="mt-3 px-10">
      <h1 className="text-5xl font-bold text-center mb-10 ">Posts Details</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
