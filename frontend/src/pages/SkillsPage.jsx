const skillCategories = [
  {
    title: "Cloud & CloudOps",
    skills: [
      "AWS",
      "EC2",
      "ECS",
      "IAM",
      "S3",
      "CloudWatch",
      "OpenSearch",
      "Linux",
    ],
  },
  {
    title: "Observability & Reliability",
    skills: [
      "Prometheus",
      "Grafana",
      "CloudWatch Metrics",
      "Log Analysis",
      "Alerting & Incident Triage",
    ],
  },
  {
    title: "Automation & DevOps Tooling",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Bash",
      "Python Automation",
      "AWS CLI",
      "Boto3",
      "Puppet",
    ],
  },
  {
    title: "Programming & Backend",
    skills: [
      "Python",
      "Flask",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "JavaScript",
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    skills: [
      "PyTorch",
      "YOLO (v8 / v11)",
      "OpenCV",
      "scikit-learn",
      "CNNs",
      "LSTMs",
      "Model Evaluation (mAP, Precision, Recall)",
    ],
  },
  {
    title: "Edge AI & Data",
    skills: [
      "Jetson AGX",
      "Edge Deployment",
      "Dataset Creation",
      "Roboflow",
      "Image Annotation",
      "Data Augmentation",
      "Pandas",
      "NumPy",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 pb-16 pt-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-3xl font-bold text-white">Skills</h1>
        <p className="mb-10 text-zinc-400">
          Technologies and tools I actively work with
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h2 className="mb-4 text-lg font-semibold text-white">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

