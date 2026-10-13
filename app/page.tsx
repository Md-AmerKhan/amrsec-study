
import Link from "next/link";
import { getPublishedProducts } from "@/lib/products";

async function ProductGrid() {
  const products = await getPublishedProducts();

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-violet-100 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
          📚
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          New guides are on the way
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          We’re preparing quality study material for your next semester.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <article
          key={product.id}
          className="group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/70"
        >
          <div
            className={`relative overflow-hidden p-6 ${
              index % 3 === 0
                ? "bg-gradient-to-br from-violet-100 via-purple-50 to-amber-50"
                : index % 3 === 1
                  ? "bg-gradient-to-br from-indigo-100 via-violet-50 to-pink-50"
                  : "bg-gradient-to-br from-fuchsia-100 via-purple-50 to-orange-50"
            }`}
          >
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl" />

            <div className="relative flex items-start justify-between gap-3">
              <span className="rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-bold tracking-wide text-violet-900">
                JNTUH
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  product.is_free
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-900"
                }`}
              >
               {product.product_type === "bundle"
  ? "SUBJECT BUNDLE"
  : product.is_free
    ? "✦ FREE GIFT"
    : "PREMIUM"}
              </span>
            </div>

            <div className="relative mt-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                Study smarter
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">
                {product.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="flex-1 text-sm leading-7 text-slate-600">
{product.product_type === "bundle" && (
  <div className="mt-5 rounded-2xl bg-violet-50 p-4">
    <p className="text-xs font-extrabold uppercase tracking-wider text-violet-800">
      Included in this bundle
    </p>

    {product.included_guides && product.included_guides.length > 0 ? (
      <ul className="mt-3 space-y-2">
        {product.included_guides.map((guide) => (
          <li
            key={guide.id}
            className="flex items-start gap-2 text-sm text-slate-700"
          >
            <span className="font-bold text-violet-600">✓</span>
            <span>{guide.title}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-2 text-sm text-slate-500">
        Bundle contents will be announced soon.
      </p>
    )}
  </div>
)}
              {product.description}
            </p>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {product.is_free ? "A gift from Amer" : "Guide price"}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-violet-800">
                  {product.is_free ? "FREE" : `₹${product.price_inr}`}
                </p>
              </div>

              {product.is_free ? (
                <Link
                  href={`/guides/${product.slug}`}
                  className="rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-4 py-3 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:from-violet-800 hover:to-indigo-800"
                >
                  Get guide →
                </Link>
              ) : (
                <span className="rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-400">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8ff] text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-20 border-b border-violet-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-indigo-800 text-lg font-black text-white shadow-lg shadow-violet-200">
              A
            </div>

            <div>
              <p className="text-lg font-extrabold tracking-tight text-slate-900">
                AmrSec<span className="text-violet-700">.Study</span>
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Learn · Prepare · Succeed
              </p>
            </div>
          </Link>

          <a
            href="#guides"
            className="rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-800 sm:px-5"
          >
            Explore guides
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold tracking-wide text-violet-900 sm:text-sm">
                Made for JNTUH students
              </span>
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Your exams.
              <br />
              Your preparation.
              <br />
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Your success.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Clear explanations, carefully structured study guides, and
              student-friendly material to help you prepare smarter for your
              semester exams.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#guides"
                className="rounded-2xl bg-gradient-to-r from-violet-700 to-indigo-700 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-violet-300 sm:text-base"
              >
                Discover your guides →
              </a>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <span className="text-lg text-amber-500">✦</span>
                Start with a free guide
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-violet-100 pt-6 text-sm text-slate-600">
              <span>✓ Student-friendly notes</span>
              <span>✓ Exam-focused preparation</span>
              <span>✓ Easy-to-understand content</span>
            </div>
          </div>

          {/* Featured welcome gift */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-300/50 via-purple-200/30 to-amber-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#251044] via-[#4c1d95] to-[#312e81] p-7 text-white shadow-2xl shadow-violet-300/40 sm:p-9">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

              <div className="relative">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wider text-violet-100">
                  YOUR FIRST GUIDE IS ON US
                </div>

                <div className="my-9 flex h-28 w-24 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5 shadow-xl backdrop-blur">
                  <span className="text-5xl">📘</span>
                </div>

                <p className="text-sm font-semibold text-violet-200">
                  START HERE
                </p>

                <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Programming for Problem Solving
                </h2>

                <p className="mt-4 text-sm leading-7 text-violet-100/80">
                  Your JNTUH first-year PPS study guide, offered as a welcome
                  gift from Amer.
                </p>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/15 pt-6">
                  <div>
                    <p className="text-xs text-violet-200">Special price</p>
                    <p className="text-3xl font-black text-amber-300">₹0</p>
                  </div>

                  <Link
                    href="/guides/pps"
                    className="rounded-xl bg-amber-300 px-5 py-3 text-sm font-extrabold text-violet-950 transition hover:bg-amber-200"
                  >
                    Explore PPS →
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs font-medium text-slate-500">
              Quality study material. Designed with students in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="relative border-t border-violet-100 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-violet-700">
                The study collection
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Find your next guide.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Explore the published study material available in our
                collection.
              </p>
            </div>

            <span className="w-fit rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800">
              Updated collection
            </span>
          </div>

          <ProductGrid />
        </div>
      </section>
{/* How it works */}
<section className="border-t border-violet-100 bg-[#faf8ff] px-5 py-16 sm:px-8 sm:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-violet-700">
        A simpler way to prepare
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        Your preparation, made easier.
      </h2>
      <p className="mt-4 leading-7 text-slate-600">
        Find study material designed to help JNTUH B.Tech students prepare
        for semester examinations with greater clarity.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-3">
      <article className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl">
          📚
        </div>
        <h3 className="mt-5 text-lg font-extrabold text-slate-900">
          01. Find your guide
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Explore available study guides and choose the subject you want
          to prepare for.
        </p>
      </article>

      <article className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
          📝
        </div>
        <h3 className="mt-5 text-lg font-extrabold text-slate-900">
          02. Review the details
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Check each guide’s description, price, and available study
          material before choosing.
        </p>
      </article>

      <article className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
          🎯
        </div>
        <h3 className="mt-5 text-lg font-extrabold text-slate-900">
          03. Prepare with confidence
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Access available guides and use your study time more effectively
          with organised learning material.
        </p>
      </article>
    </div>

    <p className="mt-8 text-center text-sm text-slate-500">
      Individual guides are our starting point. Curated subject bundles
      are part of the roadmap.
    </p>
  </div>
</section>
      {/* Brand footer */}
      <footer className="bg-[#1d1035] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">
              AmrSec<span className="text-violet-300">.Study</span>
            </p>
            <p className="mt-2 text-sm text-violet-200/75">
              Making semester preparation simpler.
            </p>
          </div>

          <div className="text-sm text-violet-200/80 md:text-right">
            <p>Created with care by Amer.</p>
            <p className="mt-1">© 2026 AmrSec.Study</p>
          </div>
        </div>
      </footer>
    </main>
  );
}