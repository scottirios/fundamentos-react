import {
  ColorPalette,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CardBaseProps {
  icon: IconType;
  title: string;
  description: string;
  colorPalette: ColorPalette;
}

export function CardBase({
  icon,
  title,
  description,
  colorPalette,
}: CardBaseProps) {
  return (
    <HStack
      gap={6}
      p={4}
      _hover={{ bg: "gray.50", rounded: "md", _dark: { bg: "gray.900" } }}
    >
      <Flex
        justify="center"
        align="center"
        backgroundColor={`${colorPalette}.100`}
        rounded="lg"
        gap={6}
        p={4}
      >
        <Icon as={icon} size="xl" color={`${colorPalette}.700`} />
      </Flex>

      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
}
