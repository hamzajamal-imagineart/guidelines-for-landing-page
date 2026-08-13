import { withBasePath } from "@/lib/assets";

// TODO: audit per product. These columns are shared across pages — only change
// them if the whole site changed.
const FOOTER_COLS = [
  {
    heading: "ImagineArt AI Studios",
    links: [
      { label: "AI Chat",              href: "https://www.imagine.art/computer/agent/chat" },
      { label: "AI Image Studio",      href: "https://www.imagine.art/ai-image-generator" },
      { label: "AI Video Studio",      href: "https://www.imagine.art/ai-film-studio" },
      { label: "AI Audio Studio",      href: "https://www.imagine.art/audio" },
      { label: "AI Film Studio",       href: "https://www.imagine.art/ai-film-studio" },
      { label: "Workflow",             href: "https://www.imagine.art/workflow" },
      { label: "Enterprise",           href: "https://www.imagine.art/business/enterprise" },
      { label: "Teams",                href: "https://www.imagine.art/teams-plan" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "AI Image Generator",   href: "https://www.imagine.art/ai-image-generator" },
      { label: "AI Video Generator",   href: "https://www.imagine.art/ai-film-studio" },
      { label: "AI Audio Generator",   href: "https://www.imagine.art/audio" },
      { label: "AI Text-to-Speech",    href: "https://www.imagine.art/audio/text-to-speech" },
      { label: "AI Music Generator",   href: "https://www.imagine.art/audio/music" },
      { label: "AI Film Studio",       href: "https://www.imagine.art/ai-film-studio" },
      { label: "AI Workflows",         href: "https://www.imagine.art/workflow" },
    ],
  },
  {
    heading: "Apps",
    links: [
      { label: "Video Translate",      href: "https://www.imagine.art/apps/video-translate" },
      { label: "HeyGen Avatar",        href: "https://www.imagine.art/apps/heygen-avatar" },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { label: "Contact Sales",        href: "https://www.imagine.art/teams-plan/contact-us" },
      { label: "Book a Demo",          href: "https://calendly.com/d/cr9s-6pt-mr3/one-on-one-demo-with-an-imagineart-expert" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Discord",              href: "https://discord.gg/z7kjUyvAbv" },
      { label: "Twitter / X",          href: "https://x.com/Imagineart_x" },
      { label: "Instagram",            href: "https://www.instagram.com/imagineartofficial" },
    ],
  },
  {
    heading: "Pricing",
    links: [
      { label: "See Plans",            href: "https://www.imagine.art/subscription" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/imagineartofficial",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/imagineartofficial",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/z7kjUyvAbv",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Imagineart_x",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@imagineartofficial",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/imagineartofficial",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/imagineartofficial",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/></svg>,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/r/ImagineAiArt/",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/imagineartofficial",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.953 15.067c-.08.162-.08.324 0 .486l3.032 5.21c.08.161.243.243.405.243.163 0 .325-.082.405-.244l3.032-5.21c.08-.161.08-.323 0-.485l-3.032-5.21c-.08-.162-.242-.243-.405-.243-.162 0-.325.08-.405.243l-3.032 5.21zM16.19 4.903c.162-.28.162-.56 0-.84L14.757 1.54c-.162-.28-.405-.28-.567 0L12.757 4.063c-.162.28-.162.56 0 .84l1.433 2.522c.162.28.405.28.567 0L16.19 4.903zm-8.38 0c.162-.28.162-.56 0-.84L6.377 1.54c-.162-.28-.405-.28-.567 0L4.377 4.063c-.162.28-.162.56 0 .84l1.433 2.522c.162.28.405.28.567 0L7.81 4.903z"/></svg>,
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/45 hover:text-white/85"
        style={{
          fontSize: 13,
          textDecoration: "none",
          fontFamily: "var(--font-sans)",
          lineHeight: 1,
        }}
      >
        {label}
      </a>
    </li>
  );
}

function AppBadge({ store, url }: { store: "apple" | "google"; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/[0.06] hover:bg-white/10"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 14px",
        borderRadius: 11,
        border: "1px solid rgba(255,255,255,0.1)",
        textDecoration: "none",
      }}
    >
      {store === "apple" ? (
        <svg width="15" height="18" viewBox="0 0 24 29" fill="rgba(255,255,255,0.9)">
          <path d="M22.35 21.9c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C7.42 19.5 6.1 14.95 7.87 11.89c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM16.17 5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ) : (
        <svg width="15" height="16" viewBox="0 0 24 27" fill="none">
          <path d="M1.4 0.8C0.8 1.2 0.4 1.9 0.4 2.8v22c0 .9.4 1.6 1 2l13-12.5L1.4.8z" fill="#EA4335"/>
          <path d="M21.2 13.2l-3.3-2-3.5 3.3 3.5 3.3 3.3-1.9c.9-.6.9-2.1 0-2.7z" fill="#FBBC05"/>
          <path d="M1.4 0.8L14.4 13.2l3-3L4.2.3C3.6-.1 2.1-.1 1.4.8z" fill="#4285F4"/>
          <path d="M1.4 26.8c.7.9 2.2.9 2.8.5l13-9.5-3-3L1.4 26.8z" fill="#34A853"/>
        </svg>
      )}
      <div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)", letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 3 }}>
          {store === "apple" ? "Download on the" : "Get it on"}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#ffffff", fontFamily: "var(--font-sans)", lineHeight: 1 }}>
          {store === "apple" ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "#070707", color: "#fff", padding: "72px 24px 48px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Main row: brand + link columns */}
        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            marginBottom: 64,
            alignItems: "flex-start",
          }}
        >
          {/* Brand column */}
          <div style={{ flex: "0 0 auto", width: 210, minWidth: 200 }}>
            <a href="https://www.imagine.art" style={{ textDecoration: "none", display: "inline-block", marginBottom: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath("/media/imagine-art-wordmark.svg")}
                alt="ImagineArt"
                style={{ display: "block", height: 20, width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.35)",
                fontFamily: "var(--font-sans)",
                margin: "0 0 20px",
              }}
            >
              Try Imagine Mobile
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <AppBadge store="apple" url="https://apps.apple.com/us/app/imagineart-ai-video-generator/id1664121419" />
              <AppBadge store="google" url="https://play.google.com/store/apps/details?id=com.vyroai.aiart&pcampaignid=web_share" />
            </div>
          </div>

          {/* Link columns */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
              gap: "32px 24px",
              minWidth: 0,
            }}
          >
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                    fontFamily: "var(--font-sans)",
                    margin: "0 0 14px",
                  }}
                >
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <FooterLink key={link.label} href={link.href} label={link.label} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 28,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.24)",
              fontFamily: "var(--font-sans)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Vyro Turkey. All rights reserved.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="bg-white/5 hover:bg-white/[0.12] text-white/55 hover:text-white"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
