import Image from "next/image";
import { ContactList } from "./components/ContactList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <div className="text-2xl font-bold">Socialize.</div>
          Optimize your social life.
        </div>
        <ContactList />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/aprilschuppel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="GitHub logo"
            width={16}
            height={16}
          />
          repo
        </a>
      </footer>
    </div>
  );
}
