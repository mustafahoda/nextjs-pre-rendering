import { Link } from "next/link"

export default function ProductList({ products }) {

    return (
        <>
            <h2>Products</h2>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <p>{product.id} | {product.title} | {product.price}</p>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    console.log('Regenerating the Products Page')
    const response = await fetch("http://localhost:4000/products/")
    const data = await response.json()


    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}