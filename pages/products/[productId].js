import { useRouter } from "next/router"

export default function Product({ product }) {

    const router = useRouter()

    if (router.isFallback) {
        return (<h1>Loading...</h1>)
    }
    return (





        <>
            <h2>{product.title}</h2>
            <p> {product.id} | {product.price}</p>
            <p> {product.description}</p>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context
    console.log(`Regenerating product ${params.productId}`)
    console.log(params.productId)
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    console.log(data)


    return ({
        props: {
            product: data
        },
        revalidate: 10
    })
}

export async function getStaticPaths() {
    return ({
        paths: [{ params: { productId: '1' } }],
        fallback: true
    })
}