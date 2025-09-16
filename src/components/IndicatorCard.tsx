import {
  Card,
  ColorPalette,
  Flex,
  FormatNumber,
  FormatNumberProps,
  Icon,
  Stat,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IndicatorCardProps extends FormatNumberProps {
  label: string;
  value: number;
  indicator: string;
  icon: IconType;
  colorPalette: ColorPalette;
}

export function IndicatorCard({
  label,
  value,
  indicator,
  icon,
  colorPalette,
  ...rest
}: IndicatorCardProps) {
  const isNegative = indicator.trim().startsWith("-");
  const Indicator = isNegative ? Stat.DownIndicator : Stat.UpIndicator;

  return (
    <Card.Root
      _hover={{ boxShadow: "md" }}
      transition="box-shadow 0.2s"
      w="full"
    >
      <Card.Body flexDir="row" alignItems="center" gap={6}>
        <Stat.Root>
          <Stat.Label fontSize="md">{label}</Stat.Label>
          <Stat.ValueText>
            <FormatNumber value={value} {...rest} />
          </Stat.ValueText>
          <Indicator alignSelf="start">{indicator}</Indicator>
        </Stat.Root>

        <Flex
          justify="center"
          align="center"
          backgroundColor={`${colorPalette}.100`}
          rounded="lg"
          p={4}
        >
          <Icon as={icon} size="xl" color={`${colorPalette}.700`} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
