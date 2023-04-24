import prisma from "@/utils/prisma";

export async function GET(request: Request) {
  const products = await prisma.products.findMany()
  console.log(products)
  return new Response(products)
}
