import {
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaGraduationCap, FaUserPlus } from "react-icons/fa6";
import { IoIosBook, IoMdMenu, IoMdPeople } from "react-icons/io";
import { IoCalendarClear, IoLogOut } from "react-icons/io5";
import { PiFileTextFill } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { NavigationItem } from "./NavigationItem";

export function Menu() {
  const router = useRouter();
  return (
    <Drawer.Root size="md" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <IoMdMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Cesul - Sistema Acadêmico</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <VStack>
                <NavigationItem
                  icon={<RiDashboardFill />}
                  label="Dashboard"
                  onClick={() => router.push("/")}
                />

                <NavigationItem
                  icon={<IoMdPeople />}
                  label="Estudantes"
                  onClick={() => router.push("/students")}
                />

                <NavigationItem
                  icon={<FaGraduationCap />}
                  label="Professores"
                  onClick={() => router.push("/teachers")}
                />

                <NavigationItem
                  icon={<IoIosBook />}
                  label="Cursos"
                  onClick={() => router.push("/courses")}
                />

                <NavigationItem
                  icon={<PiFileTextFill />}
                  label="Notas"
                  onClick={() => router.push("/grades")}
                />

                <NavigationItem
                  icon={<FaUserPlus />}
                  label="Matrículas"
                  onClick={() => router.push("/enrollment")}
                />

                <NavigationItem
                  icon={<IoCalendarClear />}
                  label="Calendário"
                  onClick={() => router.push("/calendar")}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem icon={<IoLogOut />} label="Sair" />
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
