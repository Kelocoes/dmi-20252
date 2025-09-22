import type { Post } from "../../types/PostType";

export const mergePostsWithLocalStorage = (posts: Post[]) => {
    const savedLikes = localStorage.getItem("likedPosts") || "{}";
    const likedPosts = JSON.parse(savedLikes);
    const savedHideComments = localStorage.getItem("hideComments") || "{}";
    const hideComments = JSON.parse(savedHideComments);

    return posts.map((post) => ({
        ...post,
        likes: likedPosts[post.id] || post.likes,
        hideComments: hideComments[post.id] || false,
    }));
};

export const getPosts = async () => {
    const response = await fetch("/data/post.json");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return mergePostsWithLocalStorage(data);
};