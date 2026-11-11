
import { notFound } from "next/navigation";

import products from "@/data/products";
import ProductDetails from "@/components/ProductDetails";

export const instant = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | AFTERHOURS",
      description: "The requested AFTERHOURS product could not be found.",
    };
  }

  return {
    title: `${product.name} | AFTERHOURS`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
