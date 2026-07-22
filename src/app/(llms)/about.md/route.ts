import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

const content = `# About

${USER.about.trim()}

## Personal Information

- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
