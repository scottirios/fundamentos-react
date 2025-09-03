import { CheckboxCard, CheckboxCardRootProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavigationItemProps extends CheckboxCardRootProps {
  icon: ReactNode;
  label: string;
}

export function NavigationItem({ icon, label, ...rest }: NavigationItemProps) {
  return (
    <CheckboxCard.Root
      w="full"
      variant="surface"
      colorPalette="purple"
      align="center"
      rounded="lg"
      borderWidth={0}
      cursor="pointer"
      _hover={{
        bg: "purple.100",
        color: "purple.700",
        _dark: { bg: "purple.900", color: "purple.300" },
      }}
      {...rest}
    >
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        {icon}
        <CheckboxCard.Label>{label}</CheckboxCard.Label>
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  );
}
