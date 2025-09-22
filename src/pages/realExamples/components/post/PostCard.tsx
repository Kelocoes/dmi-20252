import { useEffect, useState } from "react";
import type { Post } from "../../../../types/PostType";
import CommentSection from "./CommetSection";

export default function PostCard({ post }: { post: Post }) {
    const [likes, setLikes] = useState<number>(post.likes);

    const incrementLikes = () => {
        setLikes((prev) => prev + 1);
    };

    useEffect(() => {
        const savedLikes = localStorage.getItem("likedPosts") || "{}";
        const likedPosts = JSON.parse(savedLikes);
        likedPosts[post.id] = likes;
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }, [post.id, likes]);

    return (
        <div
            className="post-card"
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
            }}
        >
            <h3>{post.user}</h3>
            <p>{post.content}</p>
            <img
                src={post.image}
                alt="Post image"
                style={{ maxWidth: "100%" }}
            />
            <p>Likes: {likes}</p>
            <button onClick={incrementLikes}>Like</button>
            <p>{post.date}</p>
            <CommentSection 
                postId={post.id} 
                comments={post.comments} 
                initialHideComments={post.hideComments || false}
            />
        </div>
    );
}
