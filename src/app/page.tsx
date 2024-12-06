import ProductCardComponent from "@/components/ProductCard";
import mockData from "@/mock.json";
import {ProductCard} from "@/interfaces/ProductCard";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {mockData.map((product: ProductCard) => (
        <ProductCardComponent key={product.slug} product={product} />
      ))}
    </div>
  );
}
