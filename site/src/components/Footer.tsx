import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-light to-accent" />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/3 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2.5">
              <svg viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M2 6C2 4.895 2.895 4 4 4h24c1.105 0 2 .895 2 2v14c0 5.523-6.268 10-13 12C10.268 30 2 25.523 2 20V6z" fill="url(#footer-shield)"/>
                <path d="M16 10L6 15l10 5 10-5-10-5z" fill="#f59e0b" opacity="0.9"/>
                <path d="M10 16.5v4c0 1.5 2.686 3 6 3s6-1.5 6-3v-4" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <line x1="26" y1="15" x2="26" y2="22" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="26" cy="22.5" r="1" fill="#fbbf24"/>
                <defs>
                  <linearGradient id="footer-shield" x1="2" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0.08)"/>
                  </linearGradient>
                </defs>
              </svg>
              Max Gorin Scholarship
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Founded in 2021, the Max Gorin Scholarship awards $1,000 to help students reach their educational goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#about" className="text-white/60 hover:text-accent hover:translate-x-1 inline-flex transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="/#application-details" className="text-white/60 hover:text-accent hover:translate-x-1 inline-flex transition-all">
                  Application Details
                </a>
              </li>
              <li>
                <a href="/#essay-topic" className="text-white/60 hover:text-accent hover:translate-x-1 inline-flex transition-all">
                  Essay Topic
                </a>
              </li>
              <li>
                <a href="/#winner" className="text-white/60 hover:text-accent hover:translate-x-1 inline-flex transition-all">
                  Winner
                </a>
              </li>
              <li>
                <a href="/#application-form" className="text-white/60 hover:text-accent hover:translate-x-1 inline-flex transition-all">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <a
              href="mailto:scholarship@maxgorinscholarship.com"
              className="text-white/60 text-sm hover:text-accent transition-colors inline-flex items-center gap-2 group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              scholarship@maxgorinscholarship.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/45">
          <p>&copy; {new Date().getFullYear()} Max Gorin Scholarship. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors font-medium"
            >
              CalTech Web
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
