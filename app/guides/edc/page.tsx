import Link from "next/link";

export default function EDCGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-extrabold">
            AmrSec<span className="text-indigo-600">.Study</span>
          </Link>
          <Link
            href="/#guides"
            className="text-sm font-semibold text-slate-600 hover:text-indigo-600"
          >
            ← All guides
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div>
          <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-950 p-8 text-white shadow-xl">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-200">
                AmrSec.Study
              </p>
              <p className="mt-12 text-sm font-semibold text-violet-200">
                B.Tech · First Year · R25
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight">
                Electronic Devices and Circuits
              </h1>
              <p className="mt-4 text-lg text-indigo-100">EDC · CSE</p>
            </div>
            <div className="border-t border-white/20 pt-5">
              <p className="text-sm text-violet-200">Your free study guide</p>
              <p className="mt-1 text-xl font-bold">By Amer</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            A free guide from AmrSec.Study
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            Prepare for EDC with confidence.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Explore the Electronic Devices and Circuits study guide for JNTUH
            B.Tech CSE students following R25 regulations. Review the PDF for
            its topics, explanations, equations, diagrams, and exam preparation
            material.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-emerald-700">
              FREE STUDY GUIDE
            </p>
            <p className="mt-1 text-4xl font-black">₹0</p>
            <p className="mt-2 text-sm text-slate-500">
              Free PDF · No payment required
            </p>
            <a
              href="/guides/AmrSec_EDC.pdf"
              download="AmrSec_EDC.pdf"
              className="mt-6 block w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-center font-bold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              Download Free PDF ↓
            </a>
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              Download the EDC guide directly. No payment required.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold">Guide details</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>✓ JNTUH B.Tech CSE · R25</li>
              <li>✓ Electronic Devices and Circuits</li>
              <li>✓ Unit-wise study material</li>
              <li>✓ Exam-oriented explanations and equations</li>
            </ul>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              Refer to the PDF for exact topic coverage and syllabus alignment.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-7 text-center text-sm text-slate-500">
        © 2026 AmrSec.Study · By Amer
      </footer>
    </main>
  );
}