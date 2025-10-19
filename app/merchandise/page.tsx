// app/merchandise/page.tsx
"use client";

import React, { useState } from "react";
import { SuspenseSiteHeader } from "@/components/suspense-site-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  title: string;
  price: string;
  image: string;
}

export default function MerchandisePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Merchandise - stanpixels creatives",
    url: "https://thestanpixels.com/merchandise",
    description: "Explore our branded merchandise and 3D-inspired products.",
  };

  const products: Product[] = [
    {
      title: "T-Shirt",
      price: "KSH 2,500",
      image: "/m1.jpg",
    },
    {
      title: "Mug",
      price: "KSH 1,500",
      image: "/m1.jpg",
    },
    {
      title: "Sticker Pack",
      price: "KSH 1,000",
      image: "/m1.jpg",
    },
  ];

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const proceedToWhatsApp = () => {
    if (selectedProduct) {
      const message = `Hi, I'd like to order: ${selectedProduct.title}\nSize: ${selectedSize}\nColor: ${selectedColor}\nPrice: ${selectedProduct.price}`;
      const url = `https://wa.me/254722465983?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
      setDialogOpen(false);
    }
  };

  return (
    <>
      <SuspenseSiteHeader />
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Merchandise</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Discover our exclusive branded items and customized merchandise.
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                width={1080}
                height={1080}
                className="w-full object-contain rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-[#3ab3ff] font-bold">{product.price}</p>
              </div>
              <Button
                className="bg-[#3ab3ff] text-black hover:bg-[#2a9eff] w-full"
                onClick={() => handleOrder(product)}
              >
                Order
              </Button>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order {selectedProduct?.title}</DialogTitle>
            <DialogDescription>
              Select your preferences and proceed to WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="S">Small</SelectItem>
                  <SelectItem value="M">Medium</SelectItem>
                  <SelectItem value="L">Large</SelectItem>
                  <SelectItem value="XL">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="White">White</SelectItem>
                  <SelectItem value="Blue">Blue</SelectItem>
                  <SelectItem value="Red">Red</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={proceedToWhatsApp}
              className="bg-[#3ab3ff] text-black hover:bg-[#2a9eff] w-full"
            >
              Proceed to WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Shop Now</h2>
        <p className="text-lg opacity-80 mb-8">
          Support stanpixels and get some cool merch.
        </p>
        <a
          href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20shop%20merchandise"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
