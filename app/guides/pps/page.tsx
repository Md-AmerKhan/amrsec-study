
export default function PPSGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-extrabold">
            AmrSec<span className="text-indigo-600">.Study</span>
          </a>

          <a
            href="/#guides"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600"
          >
            ← All guides
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div>
          <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl bg-gradient-to-br from-indigo-700 to-violet-900 p-8 text-white shadow-xl">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
                AmrSec.Study
              </p>

              <p className="mt-12 text-sm font-semibold text-indigo-200">
                B.Tech · First Year
              </p>

              <h1 className="mt-3 text-4xl font-black leading-tight">
                Programming for Problem Solving
              </h1>

              <p className="mt-4 text-lg text-indigo-100">
                PPS · C Programming
              </p>
            </div>

            <div className="border-t border-white/20 pt-5">
              <p className="text-sm text-indigo-200">Your welcome gift</p>
              <p className="mt-1 text-xl font-bold">By Amer</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Your first guide is on us
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            Start your PPS preparation for free.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Get started with our Programming for Problem Solving study guide,
            designed to help JNTUH students understand C programming and
            prepare for their examinations.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-emerald-700">
              WELCOME GIFT
            </p>

            <p className="mt-1 text-4xl font-black">₹0</p>

            <p className="mt-2 text-sm text-slate-500">
              Free digital study guide · No payment required
            </p>

            <a
              href="/api/guides/pps/download"
              className="mt-6 block w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-center font-bold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              Download Free PDF ↓
            </a>

            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              Your download will begin securely. No payment required.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold">
              What the guide aims to cover
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>✓ Unit-wise study material</li>
              <li>✓ Easy-to-understand theoretical explanations</li>
              <li>✓ C programming examples and code snippets</li>
              <li>✓ Exam-focused revision material</li>
            </ul>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Please check the final PDF for its exact contents and syllabus
              coverage.
            </p>
          </div>

          <a
            href="/#guides"
            className="mt-8 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
          >
            Explore upcoming paid guides →
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-7 text-center text-sm text-slate-500">
        © 2026 AmrSec.Study · By Amer
      </footer>
    </main>
  );
}
