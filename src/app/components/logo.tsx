import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// https://nextjs.org/docs/app/api-reference/components/image#unoptimized

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export function LogoGithub() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <a
      href="https://github.com/tatu16"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={isDark ? "/github/github-mark-white.svg" : "/github/github-mark.svg"}
        alt="logo of github"
        width={36}
        height={36}
        className="hover"
        unoptimized
      />
    </a>
  );
}

export function HamburgerMenu() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Image
      src={
        isDark
          ? "/hamburger-menu/hamburger-menu-white.svg"
          : "/hamburger-menu/hamburger-menu.svg"
      }
      alt="icon of mobile navigation menu"
      width={36}
      height={36}
      className="hover"
      unoptimized
    />
  );
}
