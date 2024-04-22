import { Box, Button, Container, Heading, Text, VStack, Image, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaUserPlus, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Submitted.",
      description: "We've received your application and will get back to you soon!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Image src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzEzODI1Njg0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Heading as="h1" size="2xl">
          Join Our Team
        </Heading>
        <Text fontSize="xl">We are looking for passionate individuals to become ambassadors and sellers for our company. Help us grow and earn rewards!</Text>
        <Box as="form" w="full" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <Heading as="h3" size="lg">
              Application Form
            </Heading>
            <Box w="full" display="flex" alignItems="center">
              <FaUserPlus size="20px" />
              <Input placeholder="Full Name" ml={2} required />
            </Box>
            <Box w="full" display="flex" alignItems="center">
              <FaEnvelope size="20px" />
              <Input placeholder="Email Address" type="email" ml={2} required />
            </Box>
            <Box w="full" display="flex" alignItems="center">
              <FaPhone size="20px" />
              <Input placeholder="Phone Number" type="tel" ml={2} required />
            </Box>
            <Box w="full" display="flex" alignItems="center">
              <FaBuilding size="20px" />
              <Input placeholder="City" ml={2} required />
            </Box>
            <Textarea placeholder="Tell us about yourself and why you want to join us" required />
            <Button type="submit" colorScheme="blue" rightIcon={<FaUserPlus />}>
              Apply Now
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
