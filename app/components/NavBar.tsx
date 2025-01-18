"use client";;
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contacts", href: "/contacts" },
  { name: "Interactions", href: "/interactions" },
  { name: "Calendar", href: "/calendar" },
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
      className="bg-coolors-lavender_blush-200 w-full fixed top-0 z-10"
    >
      <div className="flex flex-row h-16">
        <div className="basis-1/5"></div>
        <div className="basis-3/5 flex flex-row items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={
                pathname === item.href ||
                (item.href === "/profile" && pathname.startsWith("/profile"))
                  ? "page"
                  : undefined
              }
              className={classNames(
                pathname === item.href ||
                  (item.href === "/profile" && pathname.startsWith("/profile"))
                  ? " text-coolors-non_photo_blue-900 font-extrabold"
                  : "text-coolors-lavender_blush-400 hover:text-coolors-emerald-500",
                "rounded-md mr-4 text-xl"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="basis-1/5"></div>
      </div>
    </Disclosure>
  );
}
