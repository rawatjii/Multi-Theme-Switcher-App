import axios from "axios";
import { useEffect, useState } from "react";

interface Product{
    id:number;
    image:string;
    title:string;
    description:string;
    price:number
}

const Products:React.FC = ()=>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async()=>{
        setIsLoading(true);
        try{
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            setProducts(response.data);
            console.log('response',response.data);
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, [])

    return(
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-4 py-10 text-center">
            <h4 className="font-medium ">Feature Products</h4>
            {isLoading && <p>Loading...</p>}
            <div className="flex flex-wrap mx-[-15px]">
                {!isLoading && products.length > 0 && products.map((product)=>(
                    <div className="max-w-[25%] px-[15px] py-[15px]">
                        <div key={product.id} className=" border rounded-md px-4 py-4 h-full" >
                            <img src={product.image} alt={product.title} className="h-[250px] w-auto m-auto" />
                            <div className="text-left mt-4">
                                <h5 className="text-base font-semibold line-clamp-2 -webkit-line-clamp">{product.title}</h5>
                                <p className="mt-3 line-clamp-2 text-sm">{product.description}</p>
                                <div className="flex justify-between mt-4">
                                    <h6 className="text-xl font-semibold">${product.price}</h6>
                                    <button className="bg-black text-white rounded-md px-4 py-2 text-sm ">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )   
}

export default Products;