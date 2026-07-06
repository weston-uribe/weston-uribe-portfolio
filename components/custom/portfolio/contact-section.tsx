import fs from "node:fs";
import path from "node:path";

import { FileText, Mail, MapPin } from "lucide-react";

import { LAYOUT, RESPONSIVE, SPACING } from "@/lib/constants";
import { CONTACT, RESUME } from "@/lib/portfolio/content";
import { cn } from "@/lib/utils";

const resumeAvailable = fs.existsSync(
  path.join(process.cwd(), "public/resume/weston-uribe-resume.pdf"),
);

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const activeCardClasses = cn(
  RESPONSIVE.contactActionCard,
  RESPONSIVE.contactActionCardActive,
  "group",
);

const activeCardShellClasses = cn(
  RESPONSIVE.contactActionCard,
  "group transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.045] hover:ring-white/[0.08]",
);

const disabledCardClasses = cn(
  RESPONSIVE.contactActionCard,
  RESPONSIVE.contactActionCardDisabled,
);

export function ContactSection() {
  return (
    <section
      id="contact"
      className={cn(
        RESPONSIVE.sectionAnchor,
        SPACING.sectionJoinPaddingTop,
        SPACING.sectionPaddingBottom,
      )}
    >
      <div className={cn(LAYOUT.pageShell, SPACING.stackGap, "flex flex-col")}>
        <div>
          <h2 className={RESPONSIVE.sectionHeading}>{CONTACT.title}</h2>
          <p className={cn("mt-4 max-w-2xl text-muted-foreground", RESPONSIVE.bodyText)}>
            {CONTACT.subtitle}
          </p>
        </div>

        <div className={cn(SPACING.stackGap, "flex flex-col")}>
          <div className={RESPONSIVE.contactActionGrid}>
            <div className={activeCardShellClasses}>
              <a
                href={`mailto:${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  RESPONSIVE.contactActionHeader,
                  "rounded-sm focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
                )}
              >
                <span className={cn("font-medium text-foreground", RESPONSIVE.uiText)}>
                  Email
                </span>
                <Mail
                  aria-hidden="true"
                  className="size-5 shrink-0 text-white/45 transition-colors group-hover:text-white/70"
                />
              </a>
              <span
                className={cn(
                  RESPONSIVE.contactActionSubtitle,
                  "cursor-text break-all select-text",
                )}
              >
                {CONTACT.email}
              </span>
              <div aria-hidden="true" className="min-h-0 flex-1" />
            </div>

            <a
              href={CONTACT.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={activeCardClasses}
            >
              <div className={RESPONSIVE.contactActionHeader}>
                <span className={cn("font-medium text-foreground", RESPONSIVE.uiText)}>
                  LinkedIn
                </span>
                <LinkedInIcon className="size-5 shrink-0 text-white/45 transition-colors group-hover:text-[#0A66C2]" />
              </div>
              <span className={RESPONSIVE.contactActionSubtitle}>View profile</span>
              <div aria-hidden="true" className="min-h-0 flex-1" />
            </a>

            <a
              href={CONTACT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={activeCardClasses}
            >
              <div className={RESPONSIVE.contactActionHeader}>
                <span className={cn("font-medium text-foreground", RESPONSIVE.uiText)}>
                  GitHub
                </span>
                <GitHubIcon className="size-5 shrink-0 text-white/45 transition-colors group-hover:text-white/70" />
              </div>
              <span className={RESPONSIVE.contactActionSubtitle}>View repository</span>
              <div aria-hidden="true" className="min-h-0 flex-1" />
            </a>

            {resumeAvailable ? (
              <a
                href={RESUME.assetPath}
                download={RESUME.downloadFilename}
                className={activeCardClasses}
              >
                <div className={RESPONSIVE.contactActionHeader}>
                  <span className={cn("font-medium text-foreground", RESPONSIVE.uiText)}>
                    Resume
                  </span>
                  <FileText
                    aria-hidden="true"
                    className="size-5 shrink-0 text-white/45 transition-colors group-hover:text-white/70"
                  />
                </div>
                <span className={RESPONSIVE.contactActionSubtitle}>Download PDF</span>
                <div aria-hidden="true" className="min-h-0 flex-1" />
              </a>
            ) : (
              <div
                role="group"
                aria-disabled="true"
                className={disabledCardClasses}
              >
                <div className={RESPONSIVE.contactActionHeader}>
                  <span className={cn("font-medium text-foreground", RESPONSIVE.uiText)}>
                    Resume
                  </span>
                  <FileText
                    aria-hidden="true"
                    className="size-5 shrink-0 text-white/30"
                  />
                </div>
                <span className={RESPONSIVE.contactActionSubtitle}>PDF coming soon</span>
                <div aria-hidden="true" className="min-h-0 flex-1" />
              </div>
            )}
          </div>

          <div className={RESPONSIVE.contactLocationRow}>
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-white/40" />
            <span>{CONTACT.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
