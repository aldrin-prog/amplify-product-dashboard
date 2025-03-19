import { Button, Flex } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const NewProduct=()=>{
    return (
        <>
            <Flex justifyContent="space-between" alignItems="center">
                <h1>Add New Product</h1>
                <Link to="/">
                    <Button variation="primary" colorTheme="info">Return to Dashboard</Button>
                </Link>
            </Flex>
            <div>
                <ProductForm/>
            </div>
        </>
    )
}
export default NewProduct;