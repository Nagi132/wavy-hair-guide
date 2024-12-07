export function HomeHero() {
  return (
    <div className="relative isolate pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Your Perfect
            <span className="text-blue-600"> Wavy Hair </span>
            Routine
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your complete guide to understanding, caring for, and styling wavy hair. Find the right products,
            techniques, and routines for your unique wave pattern.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/quiz"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Take the Quiz
            </a>
            <a
              href="/guide"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Read the Guide <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}