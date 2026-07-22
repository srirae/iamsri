import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/ncdai/chanhdai.com/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Experience",
    href: "/#experiences" as Route,
  },
  {
    title: "Projects",
    href: "/#projects" as Route,
  },
  {
    title: "Resume",
    href: "/resume" as Route,
  },
  {
    title: "Shelf",
    href: "/shelf" as Route,
  },
]
export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "srirae/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/srirae/portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/ncdai"

export const UTM_PARAMS = {
  utm_source: "chanhdai.com",
}
