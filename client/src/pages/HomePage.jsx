import React, { useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Text,
  VStack,
  Link as ChakraLink,
  SimpleGrid,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, red.400,pink.400)"}
          bgClip={"text"}
        >
          Current Products
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          w={"full"}
          spacing={10}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length == 0 && (
          <Text
            fontSize={"30"}
            fontWeight={"bold"}
            textAlign={"center"}
            bgGradient={"linear(to-r, red.400,pink.400)"}
            bgClip={"text"}
          >
            No products found
            <ChakraLink as={ReactRouterLink} to="/create">
              <Text fontSize={"18"}>Create a product</Text>
            </ChakraLink>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
