export default function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h1>Showing news for category <i>{category}</i></h1>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>{article.id} | {article.title}</h2>
                            <p>{article.description}</p>
                            <hr></hr>
                        </div>
                    )
                })
            }

        </>
    )
}

export async function getServerSideProps(context) {

    const { params, req, res, query } = context
    console.log(query)
    res.setHeader('Set-Cookie', ['name=Mustafa'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`Pre-rendering News Article for category ${category}`)

    return {
        props: {
            articles: data,
            category
        }
    }

}
