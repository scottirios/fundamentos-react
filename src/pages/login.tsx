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
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import { useSession } from "@/contexts/SessionContext";
import loginImage from "../../public/assets/login-image.gif";

const signInFormSchema = z.object({
  email: z.email("Invalid email address").nonempty("Email is required"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const { user, updateUser } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
    updateUser({
      id: "teste",
      email: data.email,
      cpf: "08898293909",
      fullName: "Lucas Scotti",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    });
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

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

          <VStack
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
            align="flex-start"
            gap={6}
            mt={10}
          >
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500" fontSize={"md"}>
                Email
              </Field.Label>
              <Input
                h={16}
                type="email"
                colorPalette="blue"
                color="black"
                borderRadius="md"
                {...register("email")}
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label color="gray.500" fontSize={"md"}>
                Password
              </Field.Label>
              <PasswordInput
                type="password"
                h={16}
                colorPalette="blue"
                color="black"
                borderRadius="md"
                {...register("password")}
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
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
              type="submit"
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
