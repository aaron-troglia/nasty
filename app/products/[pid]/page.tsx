import prisma from "@/utils/prisma";

export default async function Product({params}: {
    params: {
        slug: string
    }
}) {

    const product = await prisma.products.findUnique({
        where: {
            id: parseInt(params.slug)
        }
    })
    
    return (
        <div>
            <div>{product && product.title}</div>
            {params.slug}
        </div>
    )
}

export async function generateStaticParams() {
    const products: Product[] = await prisma.products.findMany()
        .then((res) => res && res.json()) 

    return products.map((product: Product) => {
        slug: product.id
    })
}