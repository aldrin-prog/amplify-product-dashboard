import {
  Button,
  Flex,
  Input,
  Label,
  TextAreaField,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
const client=generateClient<Schema>();
const ProductForm = () => {
    type FormState={
        name: string,
        description:string,
        price: string,
        inventory_count: string,
        quantity_sold: string,
    }
    const [productData,setProductData]=useState<FormState>({
        name:"",
        description:"",
        price:"0",
        inventory_count:"1",
        quantity_sold:"0",

    });
  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    const {name,value}=e.target;
    setProductData((prev)=>({
        ...prev,
        // [name]: name==="price" || name ==="inventory_count"? Number(value) : value
        [name]:value
    }));
  }
  const addProduct=async()=>{
    try {
      console.log(client.models);
        const {errors,data:new_product}=await client.models.Product.create(productData);
      
        if(errors)
            throw new Error("Error Adding product")
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <>
      <Flex direction="column" width="50%" margin="auto" justifyContent="center">
        <div>
          <Label>Product Name</Label>
          <Input type="text" onChange={handleChange} name="name" defaultValue={productData.name} />
        </div>
        <div>
          <Label>Description</Label>
          <TextAreaField onChange={handleChange} row="3" name="description" defaultValue={productData.description} placeholder="Product Desciption" />
        </div>
        <div>
          <Label>Product Price</Label>
          <Input type="text" name="price" onChange={handleChange} defaultValue={productData.price} />
        </div>
        <div>
          <Label>Inventory Count</Label>
          <Input type="number" name="inventory_count" defaultValue={productData.inventory_count} onChange={handleChange} />
        </div>
        <Button
            onClick={addProduct}
          marginLeft="auto"
          display="block"
          marginTop="1rem"
          variation="primary"
        >
          Create
        </Button>
      </Flex>
    </>
  );
};
export default ProductForm;
