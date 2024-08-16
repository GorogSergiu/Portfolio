import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
  styles = {},
}: {
  children: React.ReactNode;
  styles?: { main?: string; container?: boolean };
}) {
  return (
    <div className="relative flex flex-col h-screen w-screen">
      <Navbar />
      <main
        className={`${styles.container ? "container mx-auto max-w-7xl px-6 flex-grow pt-16" : ""} ${styles.main}`}
      >
        {children}
      </main>
      <footer className="w-full mt-auto flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer>
    </div>
  );
}
