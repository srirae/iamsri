/**
 * portfolio-config.ts
 *
 * Single importer for portfolio.json — validates the schema with Zod at
 * build/startup time and exports typed data. All other data files (user.ts,
 * social-links.ts, site.ts) import from HERE, not from portfolio.json directly.
 *
 * To update your portfolio, edit: src/config/portfolio.json
 */

import { z } from "zod"

import rawConfig from "@/config/portfolio.json"

// ─── Schema ────────────────────────────────────────────────────────────────────

const SocialProfileSchema = z.object({
  title: z.string(),
  handle: z.string(),
  href: z.string().url(),
  sameAs: z.boolean().optional(),
})

const NavItemSchema = z.object({
  title: z.string(),
  href: z.string(),
})

const JobSchema = z.object({
  title: z.string(),
  company: z.string(),
  website: z.union([z.string().url(), z.array(z.string().url())]),
  experienceId: z.string().optional(),
})

const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD"),
  category: z.string().optional(),
  pinned: z.boolean().optional(),
})

const ProjectCategorySchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
})

const ExperiencePositionSchema = z.object({
  id: z.string(),
  title: z.string(),
  employmentPeriod: z.object({ start: z.string(), end: z.string().optional() }),
  employmentType: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  skills: z.array(z.string()).optional(),
  isExpanded: z.boolean().optional(),
})

const ExperienceSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  companyLogo: z.string().optional(),
  companyIcon: z.string().optional(),
  companyWebsite: z.string().url().optional(),
  location: z.string().optional(),
  locationType: z.enum(["On-site", "Hybrid", "Remote"]).optional(),
  positions: z.array(ExperiencePositionSchema),
  isCurrentEmployer: z.boolean().optional(),
})

const EducationSchema = z.object({
  id: z.string(),
  school: z.string(),
  degree: z.string().optional(),
  fieldOfStudy: z.string().optional(),
  period: z.object({ start: z.string(), end: z.string().optional() }),
  description: z.string().optional(),
  skills: z.array(z.string()).optional(),
  isExpanded: z.boolean().optional(),
})

const PortfolioConfigSchema = z.object({
  personal: z.object({
    displayName: z.string().min(1),
    username: z.string().min(1),
    gender: z.enum(["male", "female", "non-binary"]),
    pronouns: z.string(),
    bio: z.string(),
    jobTitle: z.string(),
    address: z.string(),
    timezone: z.string(),
    email: z.string().email(),
    website: z.string().url(),
    avatar: z.string(),
    ogImage: z.string(),
    dateCreated: z.string(),
    keywords: z.array(z.string()),
  }),
  flipSentences: z.array(z.string()).min(1),
  social: z.record(z.string(), SocialProfileSchema),
  navigation: z.array(NavItemSchema),
  jobs: z.array(JobSchema),
  about: z.string(),
  site: z.object({
    url: z.string().url(),
    githubRepo: z.string(),
    githubUrl: z.string().url(),
  }),
  projectCategories: z.array(ProjectCategorySchema).optional(),
  projects: z.array(ProjectSchema),
  experiences: z.array(ExperienceSchema).optional(),
  education: z.array(EducationSchema).optional(),
})

// ─── Validation ────────────────────────────────────────────────────────────────

function loadConfig() {
  // Strip the _comment field before validation
  const { _comment: _, ...data } = rawConfig as Record<string, unknown> & {
    _comment?: string
  }

  const result = PortfolioConfigSchema.safeParse(data)

  if (!result.success) {
    const errors = result.error.errors
      .map((e) => `  - ${e.path.join(".")}: ${e.message}`)
      .join("\n")

    throw new Error(
      `\n\n❌ portfolio.json is invalid:\n${errors}\n\nFix the errors in src/config/portfolio.json and restart.\n`
    )
  }

  return result.data
}

export const portfolioConfig = loadConfig()

// ─── Convenience re-exports ────────────────────────────────────────────────────

export const { personal, flipSentences, social, navigation, jobs, about, site, projects, projectCategories, experiences, education } =
  portfolioConfig

/** base64-encode the email to protect against spam scrapers */
export const emailB64 = Buffer.from(personal.email).toString("base64")
