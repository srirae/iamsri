import React from "react"
import type { Route } from "next"
import Link from "next/link"
import { Briefcase, FolderGit2, FileText, Library, Home } from "lucide-react"

import type { NavItem as NavItemType } from "@/types/nav"
import { cn } from "@/lib/utils"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItemType<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "experience": return <Briefcase className="size-4 shrink-0" />
      case "projects": return <FolderGit2 className="size-4 shrink-0" />
      case "resume": return <FileText className="size-4 shrink-0" />
      case "shelf": return <Library className="size-4 shrink-0" />
      case "home": return <Home className="size-4 shrink-0" />
      default: return null
    }
  }

  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-2", className)}
    >
      {items.map(({ title, href }) => {
        const isActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        return (
          <NavItem
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
          >
            {getIcon(title)}
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2">
              {title}
            </span>
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group flex items-center rounded-md px-3 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground aria-[current=page]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
