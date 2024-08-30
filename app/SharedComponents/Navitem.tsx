"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { headerLink } from ".";
import { Button } from "@/components/ui/button";

function Navitems() {
  const pathname = usePathname();

  return (
    <ul className="flex md:flex-between w-full md:flex-row flex-col gap-8 md:gap-12 items-start">
      {headerLink.map((link, header) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={header}
            className={`${isActive ? "text-primary-500" : ""} ${
              link.isMobile === true ? "md:hidden block" : ""
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.href} className="md:hover:underline ">
              {link.isMobile ? (
                <Button  size="sm">
                  {link.title}
                </Button>
              ) : (
                link.title
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navitems;
