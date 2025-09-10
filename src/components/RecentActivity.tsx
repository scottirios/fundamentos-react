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

interface RecentActivityProps {
  icon: IconType;
  title: string;
  time: string;
  colorPalette: ColorPalette;
}

export function RecentActivity({
  icon,
  title,
  time,
  colorPalette,
}: RecentActivityProps) {
  return (
    <HStack gap={6} align="start">
      <Flex
        justify="center"
        align="center"
        backgroundColor={`${colorPalette}.100`}
        rounded="lg"
        p={4}
      >
        <Icon as={icon} size="xl" color={`${colorPalette}.700`} />
      </Flex>

      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{time}</Text>
      </VStack>
    </HStack>
  );
}
