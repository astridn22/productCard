"use client";

import {useState} from "react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
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
    <Card className="my-auto h-full w-4/5 rounded-3xl bg-neutral-100">
      <CardHeader>
        <img
          alt={`${product.titulo} - portada`}
          className="border-opacity-1 aspect-square max-h-56 rounded-md border-2 border-gray-300 "
          src={currentImage}
        />

        <Carousel className="h-full w-full self-center">
          <CarouselContent className="mt-1">
            {product.imagenes.map((img, index) => (
              <CarouselItem key={`${product.slug}-img-${index + 1}`} className="basis-1/3">
                <button
                  aria-label={`Seleccionar imagen ${index + 1}`}
                  className={`flex h-16 w-full items-center justify-center border-2
                     hover:border-black ${currentImage === img ? "border-black" : "border-none"} rounded-md`}
                  type="button"
                  onClick={() => setCurrentImage(img)}
                >
                  <img
                    alt={`${product.titulo} - imagen ${index + 1}`}
                    className="aspect-square h-full w-full rounded-md hover:opacity-60"
                    src={img}
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 h-5 w-5 rounded-full bg-gray-200 opacity-70 hover:opacity-100" />
          <CarouselNext className="-right-6 h-5 w-5 rounded-full bg-gray-200 opacity-70 hover:opacity-100" />
        </Carousel>
      </CardHeader>
      <CardContent />
      <CardTitle className="mx-4 -mt-6 text-lg font-normal">{product.titulo}</CardTitle>
      <CardDescription className="mx-4 my-4 text-3xl font-semibold text-neutral-800">
        © {product.colitokens}
      </CardDescription>
    </Card>
  );
}

export default ProductCardComponent;
