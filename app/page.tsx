import Link from "next/link";
import { getPublishedProducts } from "@/lib/products";

async function ProductGrid() {
  const products = await getPublishedProducts();

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-violet-100 bg-white p-7 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
          📚
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          New guides are on the way
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          We’re preparing quality study material for your next semester.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
      {products.map((product, index) => (
        <article
          key={product.id}
          className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/60 sm:hover:-translate-y-1"
        >
          <div
            className={`relative overflow-hidden p-5 sm:p-6 ${
              index % 3 === 0
                ? "bg-gradient-to-br from-violet-100 via-purple-50 to-amber-50"
                : index % 3 === 1
                  ? "bg-gradient-to-br from-indigo-100 via-violet-50 to-pink-50"
                  : "bg-gradient-to-br from-fuchsia-100 via-purple-50 to-orange-50"
            }`}
          >
            <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/50 blur-2xl" />

            <div className="relative flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-xs font-bold text-violet-900">
                JNTUH
              </span>
              <span
                className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-wide sm:text-xs ${
                  product.product_type === "bundle"
                    ? "bg-violet-200 text-violet-900"
                    : product.is_free
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-900"
                }`}
              >
                {product.product_type === "bundle"
                  ? "SUBJECT BUNDLE"
                  : product.is_free
                    ? "✦ FREE GUIDE"
                    : "PREMIUM"}
              </span>
            </div>

            <div className="relative mt-7 sm:mt-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700 sm:text-xs">
                Study smarter
              </p>
              <h3 className="mt-2 break-words text-xl font-extrabold leading-snug text-slate-950 sm:text-2xl">
                {product.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="text-sm leading-7 text-slate-600">
              {product.description}
            </p>

            {product.product_type === "bundle" && (
              <div className="mt-4 rounded-2xl bg-violet-50 p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-violet-800">
                  Included in this bundle
                </p>
                {product.included_guides &&
                product.included_guides.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {product.included_guides.map((guide) => (
                      <li
                        key={guide.id}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                      >
                        <span className="font-bold text-violet-600">✓</span>
                        <span className="break-words">{guide.title}</span>
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

            <div className="mt-6 flex flex-1 flex-col justify-end gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {product.is_free ? "A gift from Amer" : "Guide price"}
                </p>
                <p className="mt-1 text-2xl font-black text-violet-800">
                  {product.is_free ? "FREE" : `₹${product.price_inr}`}
                </p>
              </div>

              {product.is_free ? (
                <Link
                  href={`/guides/${product.slug}`}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:from-violet-800 hover:to-indigo-800 sm:w-auto"
                >
                  Get guide <span className="ml-2">→</span>
                </Link>
              ) : (
                <span className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-500 sm:w-auto">
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
    <main className="min-h-screen overflow-x-clip bg-[#faf9ff] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-violet-100/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-700 to-indigo-800 text-lg font-black text-white shadow-md shadow-violet-200 sm:h-11 sm:w-11 sm:rounded-2xl">
              A
            </div>
            <div className="min-w-0">
              <p className="whitespace-nowrap text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                AmrSec<span className="text-violet-700">.Study</span>
              </p>
              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:block sm:tracking-[0.22em]">
                Learn · Prepare · Succeed
              </p>
            </div>
          </Link>

          <a
            href="#guides"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl bg-violet-700 px-3 text-xs font-bold text-white shadow-sm transition hover:bg-violet-800 sm:px-5 sm:text-sm"
          >
            Explore guides <span className="ml-1.5">↓</span>
          </a>
        </div>
      </header>

      <section className="relative isolate">
        <div className="pointer-events-none absolute -left-32 top-12 -z-10 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-3 py-2 shadow-sm sm:px-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-violet-900 sm:text-sm">
                Made for JNTUH students
              </span>
            </div>

            <h1 className="mt-6 text-[2.65rem] font-black leading-[1.06] tracking-tight text-slate-950 sm:mt-7 sm:text-6xl lg:text-7xl">
              Your exams.
              <br />
              Your preparation.
              <br />
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Your success.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Clear explanations, carefully structured study guides, and
              student-friendly material to help you prepare smarter for your
              semester exams.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#guides"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:shadow-violet-300 sm:w-auto sm:rounded-2xl sm:px-6 sm:text-base"
              >
                Discover your guides <span className="ml-2">→</span>
              </a>
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 sm:justify-start">
                <span className="text-lg text-amber-500">✦</span>
                Start with a free guide
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-violet-100 pt-5 text-sm text-slate-600 sm:mt-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3 sm:pt-6">
              <span>✓ Student-friendly notes</span>
              <span>✓ Exam-focused preparation</span>
              <span>✓ Easy-to-understand content</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-300/50 via-purple-200/30 to-amber-200/50 blur-2xl sm:-inset-4 sm:rounded-[2.5rem]" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-gradient-to-br from-[#251044] via-[#4c1d95] to-[#312e81] p-5 text-white shadow-2xl shadow-violet-300/40 sm:rounded-[2rem] sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

              <div className="relative">
                <div className="inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-violet-100 sm:text-xs sm:tracking-wider">
                  YOUR FIRST GUIDE IS ON US
                </div>

                <div className="my-6 flex h-24 w-20 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5 shadow-xl backdrop-blur sm:my-9 sm:h-28 sm:w-24">
                  <span className="text-4xl sm:text-5xl">📘</span>
                </div>

                <p className="text-xs font-semibold text-violet-200 sm:text-sm">
                  START HERE
                </p>
                <h2 className="mt-2 break-words text-2xl font-extrabold leading-tight sm:text-4xl">
                  Programming for Problem Solving
                </h2>
                <p className="mt-3 text-sm leading-6 text-violet-100/80 sm:mt-4 sm:leading-7">
                  Your JNTUH first-year PPS study guide, offered as a welcome
                  gift from Amer.
                </p>

                <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-5 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
                  <div>
                    <p className="text-xs text-violet-200">Special price</p>
                    <p className="text-3xl font-black text-amber-300">₹0</p>
                  </div>
                  <Link
                    href="/guides/pps"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-amber-300 px-5 py-3 text-sm font-extrabold text-violet-950 transition hover:bg-amber-200 sm:w-auto"
                  >
                    Explore PPS <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs font-medium leading-5 text-slate-500 sm:mt-5">
              Quality study material. Designed with students in mind.
            </p>
          </div>
        </div>
      </section>

      <section
        id="guides"
        className="scroll-mt-20 border-t border-violet-100 bg-white py-12 sm:scroll-mt-24 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-7 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-700">
                The study collection
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Find your next guide.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore the published study material available in our
                collection.
              </p>
            </div>
            <span className="w-fit rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-800 sm:text-sm">
              Updated collection
            </span>
          </div>
          <ProductGrid />
        </div>
      </section>

      <section className="border-t border-violet-100 bg-[#faf9ff] px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-700">
              A simpler way to prepare
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Your preparation, made easier.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Find study material designed to help JNTUH B.Tech students
              prepare for semester examinations with greater clarity.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
            <article className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl">
                📚
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                01. Find your guide
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Explore available study guides and choose the subject you want
                to prepare for.
              </p>
            </article>

            <article className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                📝
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                02. Review the details
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Check each guide’s description, price, and available study
                material before choosing.
              </p>
            </article>

            <article className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                03. Prepare with confidence
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Access available guides and use your study time more effectively
                with organised learning material.
              </p>
            </article>
          </div>

          <p className="mt-7 text-center text-xs leading-6 text-slate-500 sm:text-sm">
            Individual guides are our starting point. Curated subject bundles
            are part of the roadmap.
          </p>
        </div>
      </section>

      <footer className="bg-[#1d1035] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">
              AmrSec<span className="text-violet-300">.Study</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-violet-200/75">
              Making semester preparation simpler.
            </p>
          </div>
          <div className="border-t border-white/10 pt-4 text-sm text-violet-200/80 sm:pt-0 md:border-0 md:text-right">
            <p>Created with care by Amer.</p>
            <p className="mt-1">© 2026 AmrSec.Study</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
