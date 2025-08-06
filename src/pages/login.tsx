import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import loginImage from "../../public/assets/login-image.gif";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align={"center"} justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>
          <Heading as="h1" fontSize="3xl" fontWeight="bold" color="black">
            Account Login
          </Heading>
          <Text color="gray.400" fontWeight="normal" fontSize="lg">
            If you are already a member you can login with your email address
            and password.
          </Text>

          <VStack align="flex-start" gap={6} mt={10}>
            <Field.Root>
              <Field.Label color="gray.500" fontSize={"md"}>
                Email
              </Field.Label>
              <Input h={16} colorPalette="blue" color="black" />
            </Field.Root>

            <Field.Root>
              <Field.Label color="gray.500" fontSize={"md"}>
                Password
              </Field.Label>
              <PasswordInput
                type="password"
                h={16}
                colorPalette="blue"
                color="black"
              />
            </Field.Root>

            <Checkbox
              colorPalette="blue"
              color="gray.500"
              fontWeight="medium"
              fontSize="md"
              borderRadius="md"
            >
              Remember me
            </Checkbox>

            <Button
              colorPalette="blue"
              h={16}
              borderRadius="md"
              fontSize={"md"}
              fontWeight={"medium"}
              w="full"
            >
              Login
            </Button>
          </VStack>

          <HStack gap={1} justify={"center"} mt={10}>
            <Text color="gray.500" fontSize={"md"} fontWeight="medium">
              Dont have an account?
            </Text>
            <ChakraLink color="blue.500" asChild>
              <NextLink href="/sign-up">Sign up here</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
