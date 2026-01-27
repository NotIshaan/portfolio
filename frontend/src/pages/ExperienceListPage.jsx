'use client';

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperienceListPage() {
  const { type } = useParams();
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isWork = type === "work";
  const title = isWork ? "Work Experience" : "Project Experience";

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://127.0.0.1:8000/api/experience");
        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }
        const data = await response.json();

        // Filter by type and convert tech_stack string to array
        const filtered = data
          .filter((exp) => exp.type === type)
          .map((exp) => ({
            ...exp,
            tech_stack: exp.tech_stack
              ? exp.tech_stack.split(",").map((t) => t.trim())
              : [],
          }));

        setExperiences(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, [type]);

  return (
    <main className="min-h-screen px-6 pb-16 pt-24">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/experience"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to selection
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-white">{title}</h1>
        <p className="mb-10 text-zinc-400">
          {isWork
            ? "My professional journey and work history"
            : "Personal and open-source projects I've worked on"}
        </p>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-cyan-400" />
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && experiences.length === 0 && (
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 text-center text-zinc-500">
            No {isWork ? "work" : "project"} experiences found.
          </div>
        )}

        {!loading && !error && experiences.length > 0 && (
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

