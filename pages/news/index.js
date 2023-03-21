export default function NewArticeList({ articles }) {
    return (
        <>
            <h1> News Article List </h1>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>{article.id} {article.title} | {article.category} </h2>
                            <hr></hr>

                        </div>
                    )
                })
            }
        </>
    )

}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json()

    console.log(`Pre-rendering News Article List`)

    return {
        props: {
            articles: data
        }
    }
}