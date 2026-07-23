import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>
      </div>

      <div className="py-16 text-center text-[min(15vw,6rem)] font-bold tracking-tighter leading-none w-full flex justify-center">
        <span className="bg-gradient-to-t from-background to-foreground bg-clip-text text-transparent">
          Sri Vamsi Rajesh
        </span>
      </div>

      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}