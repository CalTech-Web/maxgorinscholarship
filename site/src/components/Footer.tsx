import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Max Gorin Scholarship</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Founded in 2021, the Max Gorin Scholarship awards $1,000 to help students reach their educational goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="text-white/70 hover:text-accent transition-colors">About</a></li>
              <li><a href="/#application-details" className="text-white/70 hover:text-accent transition-colors">Application Details</a></li>
              <li><a href="/#essay-topic" className="text-white/70 hover:text-accent transition-colors">Essay Topic</a></li>
              <li><a href="/#winner" className="text-white/70 hover:text-accent transition-colors">Winner</a></li>
              <li><a href="/#application-form" className="text-white/70 hover:text-accent transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-white/70 text-sm">
              <a
                href="mailto:scholarship@maxgorinscholarship.com"
                className="hover:text-accent transition-colors"
              >
                scholarship@maxgorinscholarship.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
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
