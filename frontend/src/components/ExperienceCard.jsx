export default function ExperienceCard({ experience }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="group relative border-l-2 border-zinc-700 pl-6 pb-8 last:pb-0">
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-cyan-400 bg-zinc-950" />
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {experience.title}
            </h3>
            <p className="text-sm text-cyan-400">{experience.organization}</p>
          </div>
          <span className="shrink-0 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
            {formatDate(experience.start_date)} —{" "}
            {formatDate(experience.end_date)}
          </span>
        </div>
        <p className="mb-4 leading-relaxed text-zinc-400">
          {experience.description}
        </p>
        {experience.tech_stack && experience.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.tech_stack.map((tech, index) => (
              <span
                key={index}
                className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

