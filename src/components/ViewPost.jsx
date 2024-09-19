import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { PostLists } from "../store/PostListProvider";
const ViewPost = ({ post }) => {
  const { deletePost } = useContext(PostLists);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <IoMdCloseCircle />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions">
          this post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};
export default ViewPost;
