import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";

const Home = () => {
  const allPosts = useLoaderData();
  const posts = allPosts.slice(0, 20);
  console.log(posts);
  return (
    <div className="mt-10 p-5">
      <h1 className="text-5xl font-bold text-center">All The Posts</h1>
      <div className=" mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
