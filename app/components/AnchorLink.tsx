"use client";

import { MouseEvent } from "react";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function AnchorLink({ href, className, children }: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
