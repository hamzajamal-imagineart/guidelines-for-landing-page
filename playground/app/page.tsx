import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

// Kit playground page: the shared chrome over a tall placeholder, so the nav's
// top, scrolled and menu states can all be checked.
export default function Page() {
  return (
    <>
      <SiteNav variant="onLight" />
      <main>
        <section className="container-page flex min-h-[640px] h-[90vh] items-center">
          <h1 className="text-[clamp(34px,4.4vw,54px)] font-medium leading-[1.08] tracking-[-0.03em]">
            Landing Page Kit <span className="text-[var(--color-heading-muted)]">Playground</span>
          </h1>
        </section>
        <section className="container-page h-[120vh] border-t border-black/[0.08]" />
      </main>
      <SiteFooter />
    </>
  );
}
