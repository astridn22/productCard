"use client";

import {useState} from "react";

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
  const [currentImage, setCurrentImage] = useState(product.imagenes[0]);

  return (
    <Card className="my-auto h-96 w-80 rounded-2xl bg-neutral-100">
      <CardHeader>
        <img
          alt={`${product.titulo} - portada`}
          className="border-opacity-1 aspect-square max-h-52 rounded-lg border-2 border-gray-300 "
          src={currentImage}
        />

        <Carousel className="h-48 w-64 self-center">
          <CarouselContent>
            {product.imagenes.map((img, index) => (
              <CarouselItem key={`${product.slug}-img-${index}`} className="basis-1/3">
                <button
                  aria-label={`Seleccionar imagen ${index + 1}`}
                  className={`flex h-full w-full items-center justify-center border-2 p-2 ${
                    currentImage === img ? "border-black" : "border-gray-300"
                  } rounded-lg`}
                  type="button"
                  onClick={() => setCurrentImage(img)}
                >
                  <img
                    alt={`${product.titulo} - imagen ${index + 1}`}
                    className="h-full w-full rounded-lg object-cover"
                    src={img}
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-7 h-6 w-6 -translate-y-1/2 rounded-full bg-gray-200 opacity-70 hover:opacity-100" />
          <CarouselNext className="-right-7 h-6 w-6 -translate-y-1/2 rounded-full bg-gray-200 opacity-70 hover:opacity-100" />
        </Carousel>
      </CardHeader>
    </Card>
  );
}

export default ProductCardComponent;
