import Image from "next/image";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.3),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Est. 2021
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Max Gorin Scholarship
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
                Founded in 2021, the Max Gorin Scholarship was designed to award one lucky applicant $1,000 for their educational expenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#application-form"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-accent-light hover:shadow-xl hover:scale-105 transition-all"
                >
                  Apply Now
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/girl-3718537_640.jpg"
                  alt="Students studying together for academic success"
                  width={640}
                  height={426}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl mt-8">
                <Image
                  src="/images/student-3500990_640.jpg"
                  alt="College student focused on educational goals"
                  width={640}
                  height={426}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Stats Bar */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="group">
              <p className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">$1,000</p>
              <p className="text-sm text-foreground/60 mt-1">Award Amount</p>
            </div>
            <div className="group">
              <p className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">400</p>
              <p className="text-sm text-foreground/60 mt-1">Word Essay</p>
            </div>
            <div className="group">
              <p className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">2021</p>
              <p className="text-sm text-foreground/60 mt-1">Year Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About The Max Gorin Scholarship
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded in 2021, the Max Gorin Scholarship was designed to award one lucky applicant $1,000 for their educational expenses.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As an immigrant from Ukraine, scholarship founder Maxim Gorin grew up understanding the importance of serving his community, and for it to thrive, access to education is vital.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The Max Gorin Scholarship aims to combat the rising cost of education often presented to students who may not have the financial means to reach their educational goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/images/pexels-keira-burton-6147276-scaled.jpg"
                  alt="Diverse group of students collaborating in a classroom"
                  width={640}
                  height={960}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mt-6">
                <Image
                  src="/images/pexels-pixabay-267885-scaled.jpg"
                  alt="Modern classroom environment supporting higher education"
                  width={640}
                  height={426}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Maxim Gorin */}
      <section id="more-about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              More About Maxim Gorin
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
              More information about the scholarship and the founder, Maxim Gorin, can be found below.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-section-bg rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">LifeLine Ambulance</h3>
              <p className="text-foreground/80 leading-relaxed">
                In 2002 Maxim Gorin co-founded LifeLine Ambulance in Los Angeles County. In the early years, Maxim, a newly licensed emergency medical technician, frequently responded to calls himself, handled late-night dispatching, and implemented marketing efforts highlighting its mission; to serve and protect the community in emergencies.
              </p>
            </div>
            <div className="bg-section-bg rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">Growth &amp; Partnerships</h3>
              <p className="text-foreground/80 leading-relaxed">
                Over the next two decades, LifeLine entered into long-term growth while continually developing essential partnerships with hospitals, insurance companies, managed care groups, nursing facilities, and other care providers in Los Angeles and Orange County.
              </p>
            </div>
            <div className="bg-section-bg rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">LifeLine Today</h3>
              <p className="text-foreground/80 leading-relaxed">
                Today, LifeLine&apos;s fleet of 70 ambulances and over 300 employees offers 24/7 high acuity patient care, basic life support, and critical care transport with a dedication to excellence in all aspects of healthcare.
              </p>
            </div>
            <div className="bg-section-bg rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">LifeLine Supply</h3>
              <p className="text-foreground/80 leading-relaxed">
                Built from the need to support Lifeline&apos;s growing operations, clients, and the community, Maxim expanded Lifeline&apos;s operations to include Lifeline Supply. He partnered with a manufacturer to develop and supply FDA-approved sanitizing wipes, hand sanitizer, and various other critical PPE needed for Lifeline employees and the community. LifeLine Supply focuses on providing high-quality, FDA-approved products immediately accessible within Los Angeles and Orange Counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Details */}
      <section id="application-details" className="py-20 bg-section-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Application Details
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">Scholarship Award Amount</p>
                    <p className="text-2xl font-bold text-primary">$1,000</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">Scholarship Deadline</p>
                    <p className="text-2xl font-bold text-primary">June 30, 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4">Scholarship Eligibility Requirements</h3>
                <p className="text-foreground/70 mb-4">We require applicants to meet at least one of the below criteria:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">You must be enrolled in an undergraduate or graduate program by the scholarship deadline OR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">You must be a current high school senior that has been accepted into a college or university</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/images/library-869061_1280.jpg"
                  alt="University library representing educational opportunities"
                  width={1280}
                  height={853}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/images/library-5612441_640.jpg"
                  alt="Students studying in a modern library environment"
                  width={640}
                  height={426}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Topic */}
      <section id="essay-topic" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Scholarship Essay Topic
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/dawn-1840298_640.jpg"
                alt="Sunrise symbolizing new beginnings and educational opportunities"
                width={640}
                height={426}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 sm:p-10 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <h3 className="text-xl font-semibold">Essay Prompt</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                Write a 400-word essay answering the below question:
              </p>
              <blockquote className="border-l-4 border-accent pl-6 text-white/95 italic text-lg leading-relaxed">
                &ldquo;Healthcare in America is a frequently debated topic. Do you believe an individual&apos;s ability to obtain higher education can impact their long-term quality of health? Why or why not?&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 2022 Winner */}
      <section id="winner" className="py-20 bg-section-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              2022
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Max Gorin Scholarship Winner
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <Image
                    src="/images/shiv-ma-gorin-scholarship-winner-2022.jpg"
                    alt="Shiv Bhakta, 2022 Max Gorin Scholarship Winner"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Shiv Bhakta</h3>
                  <p className="text-foreground/60 mb-4">He will be attending Western University of Health Sciences.</p>
                  <p className="text-foreground/70 text-sm mb-4">
                    In an essay answering, &ldquo;Healthcare in America is a frequently debated topic. Do you believe an individual&apos;s ability to obtain higher education can impact their long-term quality of health? Why or why not?&rdquo; the student wrote the following:
                  </p>
                  <blockquote className="border-l-4 border-accent pl-4 text-foreground/80 italic leading-relaxed">
                    &ldquo;Being able to purse a higher education is a privilege for so many, and can be seen as the ultimate goal for a student to have a successful life. But ultimately, in the long term, with the experiences of school in the rear view mirror and someone working in their respective career, their cumulative experiences and knowledge obtained can serve to be a platform for them to improve and maintain health long-term for the rest of their lives.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Application Form
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-foreground/60 mt-4">
              Fill out the form below to apply for the Max Gorin Scholarship.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward achieving your educational goals. Apply for the Max Gorin Scholarship today.
          </p>
          <a
            href="#application-form"
            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-accent-light hover:shadow-xl hover:scale-105 transition-all"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
