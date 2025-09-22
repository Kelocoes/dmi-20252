import { useEffect, useState } from "react";
import { getPosts } from "../../../../services/post/PostService";
import type { Post } from "../../../../types/PostType";
import PostCard from "./PostCard";

export default function PostPage() {
    const [post, setPost] = useState<Post[]>();

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPost(posts);
        };

        fetchPosts();
    }, []);

    return (
        <div id="post-page">
            <h2>Página de Post</h2>
            <p>Este es un ejemplo de un componente que muestra una lista de posts</p>
            <div id="post-list">
                {post 
                    ? post.map((p) => <PostCard key={p.id} post={p} />) 
                    : <p>Cargando posts... </p>
                }
            </div>
        </div>
    ) ;
}