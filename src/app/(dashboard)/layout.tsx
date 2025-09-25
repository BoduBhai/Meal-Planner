import { ReactNode } from "react";
import { DashboardLayout } from "./_components/dashboard-layout";

type LayoutProps = {
  children: ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
