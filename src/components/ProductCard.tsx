"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {ProductCard} from "@/interfaces/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductCardProps {
  product: ProductCard;
}

function ProductCardComponent({product}: ProductCardProps) {
  return (
    <Card className="my-auto h-[550px] w-[350px] rounded-[18px] bg-neutral-100">
      <CardHeader>
        <Carousel className="mt-4">
          <CarouselContent>
            {product.imagenes.map((img, index) => (
              <CarouselItem key={`${product.slug}-img-${index}`}>
                <img
                  alt={`${product.titulo} - imagen ${index + 1}`}
                  className="border-opacity-1 mb-2 rounded-[18px] border-2 border-gray-300"
                  src={img}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <CardHeader />
        <CardTitle>{product.titulo}</CardTitle>
        <CardDescription className="text-lg font-semibold tracking-tight text-black">
          USD {product.colitokens}
        </CardDescription>
      </CardHeader>
      <CardContent className="tracking-tight">
        <p>{product.descripcion}</p>
      </CardContent>
      <CardFooter className="justify-between" />
    </Card>
  );
}

export default ProductCardComponent;
