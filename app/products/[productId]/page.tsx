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
        <div className="py-4 md:py-12">
            {product?.title && (
                <h1 className="text-lg md:text-2xl font-bold mb-4">{product.title}</h1>
            )}

            {product?.description && (
                <div>{product.description}</div>
            )}
        </div>
    )
}
