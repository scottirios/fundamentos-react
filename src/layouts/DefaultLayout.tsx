import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  IoMdHelpCircle,
  IoMdMenu,
  IoMdNotifications,
  IoMdSettings,
} from "react-icons/io";
import { Avatar } from "@/components/ui/avatar";
import logo from "../../public/assets/logo-preta.png";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex flexDir="column" bg="gray.50">
      <Flex justify="space-between" w="full" py={2} px={4}>
        <Flex align="center" gap={4}>
          <IconButton variant="outline">
            <IoMdMenu />
          </IconButton>
          <Image w="130px" height="60px" src={logo.src} />
        </Flex>

        <Group>
          <IconButton variant="outline">
            <IoMdNotifications />
          </IconButton>

          <IconButton variant="outline">
            <IoMdHelpCircle />
          </IconButton>

          <IconButton variant="outline">
            <IoMdSettings />
          </IconButton>

          <Separator orientation="vertical" h="full" />

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
