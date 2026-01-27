import { Link } from "react-router-dom";

export default function ExperienceSelectPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="w-full max-w-2xl">
        <h1 className="mb-3 text-center text-3xl font-bold text-white">
          Experience
        </h1>
        <p className="mb-10 text-center text-zinc-400">
          What would you like to view?
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/experience/work"
            className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center transition-all hover:border-cyan-400/50 hover:bg-zinc-900"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-800 transition-colors group-hover:bg-cyan-400/10">
              <svg
                className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Work Experience
            </h2>
            <p className="text-sm text-zinc-500">
              Professional roles and employment history
            </p>
          </Link>

          <Link
            to="/experience/project"
            className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center transition-all hover:border-cyan-400/50 hover:bg-zinc-900"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-800 transition-colors group-hover:bg-cyan-400/10">
              <svg
                className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Project Experience
            </h2>
            <p className="text-sm text-zinc-500">
              Personal and open-source projects
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

