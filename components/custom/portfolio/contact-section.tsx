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
