import {
  Box,
  Image,
  HStack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product.js";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const bg = useColorModeValue("white", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
        toast({
          title: "Error",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success",
          description: message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    onClose();
  };
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Box shadow="lg" rounded="lg" overflow="hidden">
      <Image
        boxSize="300px"
        objectFit="cover"
        src={product.image}
        alt={product.name}
        bg={bg}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} textAlign={"center"}>
          {product.name}
        </Heading>
        <Text fontSize={"xl"} color={textColor} textAlign={"center"}>
          ${product.price}
        </Text>

        <HStack>
          <Button colorScheme="teal" size="md" onClick={onOpen}>
            Edit
          </Button>
          <Button
            colorScheme="red"
            size="md"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete
          </Button>
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) => {
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    });
                  }}
                />
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) => {
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    });
                  }}
                />
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) => {
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    });
                  }}
                />
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Update
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default ProductCard;
