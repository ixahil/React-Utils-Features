import { useRouter } from "next/router";
import classNames from "classnames";

const SidebarClasses = () => {
  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-50"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return <div>SidebarClasses</div>;
};

export default SidebarClasses;
