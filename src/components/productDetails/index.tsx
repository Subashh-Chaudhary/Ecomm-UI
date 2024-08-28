import { useParams } from "react-router-dom"

const ProductDetails = ()=>{
          const params = useParams();

          console.log(params);
          return(
                    <>
                    <h1>Product Details:</h1> 
                    <p
                    className="m-6 text-2xl">{params.slug}</p>      
                    </>
          )
}

export default ProductDetails;