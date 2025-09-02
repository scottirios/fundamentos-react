import { CloseButton, Drawer, IconButton, Kbd, Portal } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";

export function Menu() {
  return (
    <Drawer.Root size="md" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <IoIosMenu />
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
              Press the <Kbd>esc</Kbd> key to close the drawer.
            </Drawer.Body>
            <Drawer.Footer></Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
