import React, {useEffect, useState} from "react";

function Footer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                console.log(response);
                if (response.status === 200) {
                    const data = await response.json();
                    console.log(data);
                    setPosts(data);
                }
            } catch (e){

            }
        }

        fetchPosts();
    }, []);


    return <div>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
}

export default Footer;