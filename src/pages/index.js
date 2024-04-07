import {
  Container,
  Heading,
  Table,
  Tbody,
  Th,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosClient } from "@/lib/axios";
export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await axiosClient.get("/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProduct = products.map((item) => (
    <Tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.price}</Td>
      <Td>{item.description}</Td>
      <Td>{item.image}</Td>
    </Tr>
  ));

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Container>
      <Heading>Helo World</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Description</Th>
            <Th>Image</Th>
          </Tr>
        </Thead>
        <Tbody>{renderProduct}</Tbody>
      </Table>
    </Container>
  );
}
