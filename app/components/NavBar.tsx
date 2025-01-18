"use client";

import {
  Disclosure
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Profiles", href: "/profile" },
  { name: "Add Contact", href: "/add-contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="bg-coolors-lavender_blush-200 w-full fixed top-0 z-10 flex-no-wrap"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* logo */}
            <div className="flex shrink-0 items-center">
              <Image
                alt="Socialize S"
                src="/socialize-s.png"
                width="32"
                height="32"
              />
            </div>

            {/* navlinks */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-2xl">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={
                      pathname === item.href ||
                      (item.href === "/profile" &&
                        pathname.startsWith("/profile"))
                        ? "page"
                        : undefined
                    }
                    className={classNames(
                      pathname === item.href ||
                        (item.href === "/profile" &&
                          pathname.startsWith("/profile"))
                        ? " text-coolors-non_photo_blue-900 font-extrabold"
                        : "text-coolors-lavender_blush-400 hover:text-coolors-emerald-500",
                      "rounded-md px-2 py-2 text-lg"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
