import { useState } from 'react';
import {
  Container,
  VStack,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Box
} from '@chakra-ui/react';

const Index = () => {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem = { description, quantity: parseInt(quantity, 10), price: parseFloat(price) };
    setItems([...items, newItem]);
    setDescription('');
    setQuantity('');
    setPrice('');
  };

  const handleGenerateInvoice = () => {
    const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    alert(`Total Invoice: $${total.toFixed(2)}`);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">Invoice Generator</Text>
        <Box w="full">
          <Text mb={2}>Add Transaction:</Text>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Input placeholder="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <Input placeholder="Price" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
            <Button colorScheme="blue" onClick={handleAddItem}>Add Item</Button>
          </VStack>
        </Box>
        <Box w="full">
          <Text mb={2}>Transactions:</Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th isNumeric>Quantity</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.description}</Td>
                  <Td isNumeric>{item.quantity}</Td>
                  <Td isNumeric>${item.price.toFixed(2)}</Td>
                  <Td isNumeric>${(item.quantity * item.price).toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Button colorScheme="green" onClick={handleGenerateInvoice}>Generate Invoice</Button>
      </VStack>
    </Container>
  );
};

export default Index;