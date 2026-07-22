"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRightIcon, FolderGit2, Cloud, Server, Wrench } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/base/ui/button"
import { PostItem } from "@/features/blog/components/post-item"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects, projectCategories } from "@/lib/portfolio-config"
import type { Doc } from "@/features/doc/types/document"

const ID = "projects"

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  apis: Server,
  infra: Cloud,
  tools: Wrench,
  apps: FolderGit2,
}

type BlogClientProps = {
  allPosts: Doc[]
}

export function BlogClient({ allPosts }: BlogClientProps) {
  const categories = projectCategories || []
  const [active, setActive] = useState(categories[0]?.id || "apps")

  const activeProjectSlugs = projects
    .filter((p) => p.category === active)
    .map((p) => p.slug)

  const filteredPosts = allPosts.filter((post) => activeProjectSlugs.includes(post.slug))

  const counts = categories.reduce<Record<string, number>>((acc, c) => {
    acc[c.id] = projects.filter((p) => p.category === c.id).length
    return acc
  }, {})

  const activeMeta = categories.find((c) => c.id === active)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({projects.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        {categories.length > 0 && (
          <Tabs value={active} onValueChange={setActive} className="w-full mb-6">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 p-1">
              {categories.map((cat) => {
                const Icon = CATEGORY_ICONS[cat.id] ?? FolderGit2
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="gap-1.5 px-3 py-1.5 text-xs"
                  >
                    <Icon className="size-3.5" />
                    <span>{cat.label}</span>
                    <span className="ml-1 text-[10px] text-muted-foreground tabular-nums">
                      {counts[cat.id]}
                    </span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {activeMeta?.description && (
              <p className="text-xs text-muted-foreground font-mono mt-4 ml-1">
                {activeMeta.description}
              </p>
            )}
          </Tabs>
        )}

        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 bg-card/20 p-10 text-center mt-4">
            <p className="text-sm text-muted-foreground">Nothing here yet — stay tuned.</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            {filteredPosts.map((post) => (
              <li
                key={post.slug}
                className={cn(
                  "max-sm:screen-line-top max-sm:screen-line-bottom",
                  "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
                )}
              >
                <PostItem post={post} headingAs="h3" imageLoading="lazy" />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 pr-2.5 pl-3"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="/blog" />}
        >
          All projects
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
