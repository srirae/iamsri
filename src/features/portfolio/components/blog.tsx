// Server component — reads MDX files with fs, then passes data to the client component.
import { getBlogPosts } from "@/features/doc/data/documents"
import { BlogClient } from "./blog-client"

export function Blog() {
  const allPosts = getBlogPosts()
  return <BlogClient allPosts={allPosts} />
}
