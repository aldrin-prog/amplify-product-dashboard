import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Flex,
  Button,
} from "@aws-amplify/ui-react";
import { data, Link } from "react-router-dom";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
const client = generateClient<Schema>();
const Dashboard = () => {
  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>(
    []
  );
  useEffect(() => {
    const fetchData=async ()=>{
        try {
            const {data:productData,errors}=await client.models.Product.list();
            console.log(productData)
        } catch (error) {
            
        }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <h1>Manage Products</h1>
        <Link to="/new">
          <Button style={{ height: "max-content" }} variation="primary">
            Add New
          </Button>
        </Link>
      </Flex>
      <Table highlightOnHover={true}>
        <TableHead>
          <TableRow>
            <TableCell as="th">ID</TableCell>
            <TableCell as="th">Inventory Count</TableCell>
            <TableCell as="th">Quantity Sold</TableCell>
            <TableCell as="th">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow>
              <TableCell>Highlighted on hover</TableCell>
              <TableCell>Highlighted on hover</TableCell>
              <TableCell>Highlighted on hover</TableCell>
              <TableCell>Highlighted on hover</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Dashboard;
