import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-28 sm:py-36 overflow-hidden noise-bg">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(37,99,235,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float delay-300" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-accent-light text-sm font-semibold px-5 py-2 rounded-full mb-8 border border-white/10">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Est. 2021
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                Max Gorin
                <span className="block gradient-text-light">Scholarship</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-lg">
                Founded in 2021, the Max Gorin Scholarship was designed to award one lucky applicant $1,000 for their educational expenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#application-form"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/20 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 animate-fade-in-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-white/10">
                <Image
                  src="/images/girl-3718537_640.jpg"
                  alt="Students studying together for academic success"
                  width={640}
                  height={426}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-white/10 mt-10">
                <Image
                  src="/images/student-3500990_640.jpg"
                  alt="College student focused on educational goals"
                  width={640}
                  height={426}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Stats Bar */}
      <section className="relative bg-white py-10 shadow-lg shadow-black/5 -mt-6 mx-4 sm:mx-8 lg:mx-auto max-w-5xl rounded-2xl z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group animate-fade-in-up delay-100">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text">$1,000</p>
                <p className="text-sm text-foreground/50 mt-1 font-medium tracking-wide uppercase">Award Amount</p>
              </div>
            </div>
            <div className="group animate-fade-in-up delay-200">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text">400</p>
                <p className="text-sm text-foreground/50 mt-1 font-medium tracking-wide uppercase">Word Essay</p>
              </div>
            </div>
            <div className="group animate-fade-in-up delay-300">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-light/10 to-primary-light/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text">2021</p>
                <p className="text-sm text-foreground/50 mt-1 font-medium tracking-wide uppercase">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-section-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              About The Max Gorin Scholarship
            </h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-foreground/75 leading-relaxed">
                Founded in 2021, the Max Gorin Scholarship was designed to award one lucky applicant $1,000 for their educational expenses.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed">
                As an immigrant from Ukraine, scholarship founder Maxim Gorin grew up understanding the importance of serving his community, and for it to thrive, access to education is vital.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed">
                The Max Gorin Scholarship aims to combat the rising cost of education often presented to students who may not have the financial means to reach their educational goals.
              </p>
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
              >
                Apply for the scholarship
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5 animate-fade-in-right">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                <Image
                  src="/images/pexels-keira-burton-6147276-scaled.jpg"
                  alt="Diverse group of students collaborating in a classroom"
                  width={640}
                  height={960}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover mt-8">
                <Image
                  src="/images/pexels-pixabay-267885-scaled.jpg"
                  alt="Modern classroom environment supporting higher education"
                  width={640}
                  height={426}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Maxim Gorin */}
      <section id="more-about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">The Founder</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              More About Maxim Gorin
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-foreground/55 max-w-2xl mx-auto text-lg">
              More information about the scholarship and the founder, Maxim Gorin, can be found below.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-section-bg to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 group animate-fade-in-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">LifeLine Ambulance</h3>
              <p className="text-foreground/70 leading-relaxed">
                In 2002 Maxim Gorin co-founded LifeLine Ambulance in Los Angeles County. In the early years, Maxim, a newly licensed emergency medical technician, frequently responded to calls himself, handled late-night dispatching, and implemented marketing efforts highlighting its mission; to serve and protect the community in emergencies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-section-bg to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 group animate-fade-in-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Growth &amp; Partnerships</h3>
              <p className="text-foreground/70 leading-relaxed">
                Over the next two decades, LifeLine entered into long-term growth while continually developing essential partnerships with hospitals, insurance companies, managed care groups, nursing facilities, and other care providers in Los Angeles and Orange County.
              </p>
            </div>
            <div className="bg-gradient-to-br from-section-bg to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 group animate-fade-in-up delay-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light/10 to-primary-light/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">LifeLine Today</h3>
              <p className="text-foreground/70 leading-relaxed">
                Today, LifeLine&apos;s fleet of 70 ambulances and over 300 employees offers 24/7 high acuity patient care, basic life support, and critical care transport with a dedication to excellence in all aspects of healthcare.
              </p>
            </div>
            <div className="bg-gradient-to-br from-section-bg to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 group animate-fade-in-up delay-400">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">LifeLine Supply</h3>
              <p className="text-foreground/70 leading-relaxed">
                Built from the need to support Lifeline&apos;s growing operations, clients, and the community, Maxim expanded Lifeline&apos;s operations to include Lifeline Supply. He partnered with a manufacturer to develop and supply FDA-approved sanitizing wipes, hand sanitizer, and various other critical PPE needed for Lifeline employees and the community. LifeLine Supply focuses on providing high-quality, FDA-approved products immediately accessible within Los Angeles and Orange Counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Details */}
      <section id="application-details" className="py-24 bg-section-bg relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-bl from-accent/5 to-transparent rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">How to Apply</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Application Details
            </h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 animate-fade-in-left delay-100">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium uppercase tracking-wide">Scholarship Award</p>
                    <p className="text-3xl font-bold gradient-text">$1,000</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 animate-fade-in-left delay-200">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium uppercase tracking-wide">Scholarship Deadline</p>
                    <p className="text-3xl font-bold gradient-text">June 30, 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 animate-fade-in-left delay-300">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Eligibility Requirements
                </h3>
                <p className="text-foreground/60 mb-5">We require applicants to meet at least one of the below criteria:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-section-bg/50 rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/75">You must be enrolled in an undergraduate or graduate program by the scholarship deadline OR</span>
                  </li>
                  <li className="flex items-start gap-3 bg-section-bg/50 rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/75">You must be a current high school senior that has been accepted into a college or university</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-5 animate-fade-in-right">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover ring-1 ring-black/5">
                <Image
                  src="/images/library-869061_1280.jpg"
                  alt="University library representing educational opportunities"
                  width={1280}
                  height={853}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover ring-1 ring-black/5">
                <Image
                  src="/images/library-5612441_640.jpg"
                  alt="Students studying in a modern library environment"
                  width={640}
                  height={426}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Topic */}
      <section id="essay-topic" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Writing Prompt</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Scholarship Essay Topic
            </h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover ring-1 ring-black/5 animate-fade-in-left">
              <Image
                src="/images/dawn-1840298_640.jpg"
                alt="Sunrise symbolizing new beginnings and educational opportunities"
                width={640}
                height={426}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light rounded-2xl blur-xl opacity-20 -z-10 translate-y-2" />
              <div className="bg-gradient-to-br from-primary via-primary to-primary-light rounded-2xl p-8 sm:p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Essay Prompt</h3>
                  </div>
                  <p className="text-white/85 leading-relaxed text-lg mb-6">
                    Write a 400-word essay answering the below question:
                  </p>
                  <blockquote className="border-l-4 border-accent pl-6 text-white/95 italic text-lg leading-relaxed">
                    &ldquo;Healthcare in America is a frequently debated topic. Do you believe an individual&apos;s ability to obtain higher education can impact their long-term quality of health? Why or why not?&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2022 Winner */}
      <section id="winner" className="py-24 bg-section-bg relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/5 to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-semibold px-5 py-2 rounded-full mb-5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              2022 Winner
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Max Gorin Scholarship Winner
            </h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto animate-fade-in-up delay-200">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-light to-accent" />
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent to-primary-light rounded-2xl opacity-20 blur-lg" />
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-2 ring-accent/20">
                    <Image
                      src="/images/shiv-ma-gorin-scholarship-winner-2022.jpg"
                      alt="Shiv Bhakta, 2022 Max Gorin Scholarship Winner"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Shiv Bhakta</h3>
                  <p className="text-foreground/55 mb-5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    He will be attending Western University of Health Sciences.
                  </p>
                  <p className="text-foreground/60 text-sm mb-4">
                    In an essay answering, &ldquo;Healthcare in America is a frequently debated topic. Do you believe an individual&apos;s ability to obtain higher education can impact their long-term quality of health? Why or why not?&rdquo; the student wrote the following:
                  </p>
                  <blockquote className="border-l-4 border-accent/50 pl-5 text-foreground/75 italic leading-relaxed bg-section-bg/50 rounded-r-xl py-4 pr-4">
                    &ldquo;Being able to purse a higher education is a privilege for so many, and can be seen as the ultimate goal for a student to have a successful life. But ultimately, in the long term, with the experiences of school in the rear view mirror and someone working in their respective career, their cumulative experiences and knowledge obtained can serve to be a platform for them to improve and maintain health long-term for the rest of their lives.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Closed Notice */}
      <section id="application-form" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-primary/3 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Apply</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Application Form
            </h2>
            <div className="accent-line mx-auto mb-10" />
            <div className="bg-gradient-to-br from-section-bg to-white rounded-2xl p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-light to-accent" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Applications Are Currently Closed</h3>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-md mx-auto">
                The scholarship application period has ended. Please check back regularly for updates on when the next application cycle will resume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
