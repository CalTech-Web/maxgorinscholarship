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
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
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
