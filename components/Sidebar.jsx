import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";
import {
  IconHome,
  IconInquiry,
  IconLogout,
  IconProjects,
  IconSetting,
} from "./icons/icons";
import Image from "next/image";

const menuItems = [
  { id: 1, label: "Home", icon: IconHome, link: "/" },
  { id: 2, label: "Manage Projects", icon: IconProjects, link: "/posts" },
  { id: 3, label: "Manage Inquiries", icon: IconInquiry, link: "/users" },
  { id: 4, label: "Admin Settings", icon: IconSetting, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col md:w-20",
    {
      "w-50": !toggleCollapse,
      "w-20": toggleCollapse,
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

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <Image src="/logo-b-new.png" height={50} width={50} alt="logo" />
            <span
              className={classNames(
                "mt-2 text-lg font-medium text-text md:hidden",
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              Dev. Sahil
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-12">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={index}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light md:hidden"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {}
      {/* <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span
            className={classNames(
              "text-md font-medium text-text-light md:hidden"
            )}
          >
            Logout
          </span>
        )}
      </div> */}

      <div className={`${getNavItemClasses({})}`}>
        <Link href={"/"}>
          <a className="flex py-4 px-3 items-center w-full h-full">
            <div style={{ width: "2.5rem" }}>
              <IconLogout />
            </div>
            {!toggleCollapse && (
              <span
                className={classNames(
                  "text-md font-medium text-text-light md:hidden"
                )}
              >
                {"Logout"}
              </span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
