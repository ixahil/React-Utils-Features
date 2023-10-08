import { Contact, GanttChartSquare, Home, LogOut, UserCog } from "lucide-react";

const iconSize = 24;

export const IconHome = () => <Home color="#6c7281" size={24} />;
export const IconProjects = () => (
  <GanttChartSquare color="#6c7281" size={24} />
);
export const IconInquiry = () => <Contact color="#6c7281" size={24} />;
export const IconSetting = () => <UserCog color="#6c7281" size={24} />;
export const IconLogout = () => <LogOut color="#6c7281" size={24} />;
