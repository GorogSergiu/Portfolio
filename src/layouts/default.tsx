// import CustomCursor from "@/components/custom-cursor";
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
      {/* <CustomCursor /> */}
      <Navbar />
      <main
        className={`${styles.container ? "container mx-auto max-w-7xl px-6 flex-grow pt-16" : ""} ${styles.main}`}
      >
        {children}
      </main>
      <footer className="w-full mt-auto flex items-center justify-center py-3">
        <div className="w-[80%] flex justify-end items-center">
          © 2024 sergiugorog.com
        </div>
      </footer>
    </div>
  );
}
