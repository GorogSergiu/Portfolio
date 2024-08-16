export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sergiu-Stefan Gorog | Frontend Developer",
  description: "Frontend Developer",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portofolio",
      href: "/portofolio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
