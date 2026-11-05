import axios from "axios";




export async function getAllData(){
    'use cache'

    try{
        const [categories , products] = await Promise.all([
            axios.get('https://6ac658ffbea0e72cf5c8ea72.mockapi.io/category') ,
            axios.get('https://6ac658ffbea0e72cf5c8ea72.mockapi.io/product')
        ])


        return {
            categories : categories.data , products : products.data 
        }
    }catch(error){
        console.log(error)
        return { 
            categories: [], 
            products: [] 
        };
    }
}