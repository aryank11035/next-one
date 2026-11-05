'use client'
import Image from "next/image"

export default function CardGrid({products} : { products : any }){

   
    return(
        <div className="w-full min-h-screen border-l border-r max-w-7xl p-2 mx-auto ">
            <div className="w-full grid grid-cols-4 gap-2" >

               {products.map((p : any) => (
          <div
            key={p.id}
            className="group relative flex flex-col overflow-hidden  border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md animate-in fade-in duration-500"

          >
            {/* Product Image Container */}
            <div className="relative aspect-2/3 w-full overflow-hidden bg-gray-100">
              <Image
                src={p.image}
                alt={p.name}
                fill
            
                loading="eager"
                className="object-cover transition-transform duration-300 "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            {/* Product Info Section */}
            
                <div className="absolute inset-x-0 bottom-0 flex flex-col  bg-white/95 backdrop-blur-sm  m-2  shadow-lg border border-gray-100 transform translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                    <div className="p-2  flex h-full flex-col  justify-between">
                        <span className="inline-block w-fit  bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 mb-1">
                            {p.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 line-clamp-1 text-2  xl">{p.name}</h3>
                        {/* <p className="mt-1 text-xs text-gray-500 line-clamp-2">{p.desc}</p> */}
                    </div>

                    <div className="mt-2 flex items-center justify-between border-t px-2 ">
                        <span className="text-xs text-emerald-600 font-medium flex-1 py-2 flex justify-center">
                            {p.stock !== undefined && p.stock > 0 ? `${p.stock} in stock` : 'Out of stock'}
                        </span>
                        <span className="font-bold text-gray-900 border-l flex-1 py-2 text-center text-xl">₹{p.price}</span>
                    </div>
                </div>
                
            
          </div>
        ))}

            </div>
        </div>
    )
}