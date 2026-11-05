
import { Suspense } from "react";
import Image from "next/image";

import { getAllData } from "@/lib/getData";
import CardGrid from "@/components/ui/custom/CardGrid";
import { ClientPage } from "@/components/ui/custom/Data";
export default async function Home({searchParams} : any) {

  const { categories , products} = await getAllData();
  
  return (
    <div className="w-full ">
       <ClientPage products={products} categories={categories}/>
    </div>
  );
}
