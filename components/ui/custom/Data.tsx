'use client'

import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import CardGrid from "./CardGrid";


export function ClientPage({products , categories} : any) {


    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleCategory = (name: string) => {
        
        const newCategory = selectedCategory === name ? '' : name;
        setSelectedCategory(newCategory);
    
    };

    
    const filteredProducts = selectedCategory ? products.filter((p: any) => p.category === selectedCategory) : products;

    return (

        <>
        
            <DataGrid categories={categories} handleCategory={handleCategory} />
            <CardGrid products={filteredProducts}/>
        </>
    )
}



export function DataGrid(
        {categories , handleCategory } : {categories : any[] , handleCategory : any }
){
    
    


    return(
        <div className="w-full ">

            <div className="w-full border-b p-2">

                <div className="w-full max-w-7xl flex flex-wrap gap-2 mx-auto p-2">

                    {categories.map((category) => (
                        <Button key={category.id} onClick={() => handleCategory(category.name)}>{category.name}</Button> 
                    ))}
                </div>

            </div>

        
        </div>
    )
}