import Link from "next/link"

export default function PostList({ posts }) {
    return (
        <>
            <h1>Post List</h1>
            {
                posts.map((post) => {
                    return (
                        <Link key={post.id} href={`posts/${post.id}`} legacyBehavior passHref>
                            <div>
                                <h2>{post.id} | {post.title} </h2>
                                <hr />
                            </div>
                        </Link>
                    )
                })
            }

        </>

    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return ({
        props: {
            posts: data
        }
    })
}