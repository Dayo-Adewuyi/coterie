import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import Post from "../../../Components/Post";
import { AppContext } from "../../../context/AppContext";
import { useContext, useEffect, useState } from "react";
export default function Feed() {
  const { getAllPosts, contract } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="border-l border-r">
      <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
          <SparklesIcon className="h-5" />
        </div>
      </div>

      <Input />
      <div className="pb-72">
        {posts?.map((post) => (
          <Post
            key={post.postId}
            id={post.postId}
            author={post.author}
            content={post.content}
            img={post.image}
            timestamp={post.timestamp}
            postPage={true}
            contractAddress={post.contractAddress}
            likeCount={post.likes}
            commentCount={post.commentCount}
          />
        ))}
      </div>
    </div>
  );
}
