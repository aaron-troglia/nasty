import prisma from "@/utils/prisma";

export default async function Product({params: {productId}}: {
    params: {
        productId: string
    }
}) {

    const product = await prisma.products.findUnique({
        where: {
            id: parseInt(productId)
        }
    })
    
    return (
        <div>
            <div>{product && product.title}</div>
        </div>
    )
}
