import { useContext, useEffect, useState } from "react";
import ViewPost from "./ViewPost";
import { PostLists } from "../store/PostListProvider";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, fetching } = useContext(PostLists);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching &&
        postList.map((post) => <ViewPost key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
