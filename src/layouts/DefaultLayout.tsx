import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  IoMdHelpCircle,
  IoMdMenu,
  IoMdMoon,
  IoMdNotifications,
  IoMdSettings,
  IoMdSunny,
} from "react-icons/io";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";
import logoBranca from "../../public/assets/logo-branca.png";
import logoPreto from "../../public/assets/logo-preta.png";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex flexDir="column">
      <Flex justify="space-between" w="full" borderWidth={1} py={2} px={4}>
        <Flex align="center" gap={4}>
          <IconButton variant="outline">
            <IoMdMenu />
          </IconButton>

          {colorMode === "dark" ? (
            <Image w="130px" height="60px" src={logoBranca.src} />
          ) : (
            <Image w="115px" height="60px" src={logoPreto.src} />
          )}
        </Flex>

        <Group>
          <IconButton variant="ghost" rounded="full">
            <IoMdNotifications />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdHelpCircle />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdSettings />
          </IconButton>

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            {colorMode === "dark" ? <IoMdMoon /> : <IoMdSunny />}
          </IconButton>

          <Separator orientation="vertical" h={6} mx={2} />

          <Avatar
            name="Lucas Scotti"
            src="https://avatars.githubusercontent.com/u/128654904?v=4"
            colorPalette="purple"
          />
        </Group>
      </Flex>
      {children}
    </Flex>
  );
}
