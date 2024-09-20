import Nav from "@/components/Nav";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <div className="bg-slate-50 pt-16 dark:bg-slate-950">
      <div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center gap-24 bg-slate-300/30 font-semibold shadow-md backdrop-blur-[6px] dark:bg-slate-800 dark:text-slate-100">
        <Nav link="/" name="SART" />
        <Nav link="/Data" name="Data" />
        <Nav link="/faq" name="FAQ" />
        <Nav link="/sign-in" name="Sign in" />
        <Nav link="/contact-us" name="Contact us" />
      </div>
      {children}
    </div>
  );
}
