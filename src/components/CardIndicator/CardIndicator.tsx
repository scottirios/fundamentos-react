import { Card, Flex, Icon, Stat } from "@chakra-ui/react";

interface CardIndicatorProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  text: string;
  percentage: string;
  color: string;
}

export function CardIndicator({
  title,
  icon,
  value,
  text,
  percentage,
  color,
  ...rest
}: CardIndicatorProps) {
  return (
    <Card.Root>
      <Card.Body flexDir="row" alignItems="center" gap={6}>
        <Stat.Root>
          <Stat.Label fontSize="md"></Stat.Label>
          <Stat.ValueText>{value}</Stat.ValueText>
          <Stat.UpIndicator alignSelf="start">{text}</Stat.UpIndicator>
        </Stat.Root>

        <Flex
          justify="center"
          align="center"
          backgroundColor={color}
          rounded="lg"
          p={4}
        >
          <Icon size="xl" color={color}>
            {icon}
          </Icon>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
