export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-4 flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
          <a href="/" className="hover:text-blue-300">
            Home
          </a>
          <a href="#features" className="hover:text-blue-300">
            Features
          </a>
          <a
            href="https://g.page/r/Cf24_Y6fK0u2EAI/review"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-blue-300">
            Pricing
          </a>
          <a href="/resources" className="hover:text-blue-300">
            Resources
          </a>
          <a
            href="/referral"
            title="Programme offering 10% on all website referrals upon completion of the project. Terms and conditions apply."
            className="hover:text-blue-300"
          >
            Referral
          </a>
        </nav>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} stanpixels. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-blue-300">
              Privacy
            </a>
            <a href="#terms" className="hover:text-blue-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
