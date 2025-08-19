import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div>{children}</div>;
}
