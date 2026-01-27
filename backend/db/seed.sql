-- =========================
-- WORK EXPERIENCE
-- =========================

INSERT INTO portfolio_schema.experience
(type, title, organization, description, tech_stack, start_date, end_date)
VALUES
(
  'work',
  'Machine Learning Intern',
  'ERIC Robotics, Pune',
  'Developed and deployed real-time object detection systems on Linux using YOLOv11 on Jetson AGX, achieving ~30 FPS inference for robotics applications. Built and curated large-scale computer vision datasets with over 10,000 annotated images, improving model accuracy by 15% using augmentation techniques in Roboflow. Integrated OpenCV and Flask-based pipelines for live video streaming, distance estimation, and automated logging.',
  'Python, YOLOv11, PyTorch, OpenCV, Jetson AGX, Roboflow, Linux, Flask',
  '2025-02-01',
  '2025-06-30'
),
(
  'work',
  'Cloud Engineer Intern',
  'TraceLink, Pune',
  'Built Prometheus metrics and Grafana dashboards for ECS capacity, CPU, memory, and service health, promoted to production via Puppet and used by CloudOps teams for incident triage. Investigated EC2 out-of-memory issues caused by Fluent Bit buffering and resolved recurring OOM kills by implementing filesystem buffering. Enabled SendGrid usage monitoring, contributing to approximately $900/month in cloud cost savings. Resolved 150+ CloudOps tickets including EC2 outages, access provisioning, and AS2/SFTP integrations using CLEO Harmony. Automated operational tasks using Python, Boto3, AWS CLI, and Linux tooling.',
  'AWS, EC2, ECS, Prometheus, Grafana, Puppet, Linux, Python, Boto3, OpenSearch',
  '2025-07-01',
  NULL
);

-- =========================
-- PROJECTS
-- =========================

INSERT INTO portfolio_schema.experience
(type, title, organization, description, tech_stack, start_date, end_date)
VALUES
(
  'project',
  'Sign Language Detection using CNN-LSTM',
  'Academic Research Project',
  'Developed a real-time sign language recognition system using a hybrid CNN-LSTM architecture for gesture-based text translation. Optimized the pipeline for accuracy and low-latency performance, improving real-world usability in accessibility-focused applications.',
  'Python, Deep Learning, CNN, LSTM, OpenCV',
  '2024-06-01',
  '2024-11-30'
),
(
  'project',
  'Automatic Trading Bot',
  'Personal Project',
  'Built an AI-driven trading bot using Random Forest for asset price prediction and FinBERT for financial news sentiment analysis. Achieved 90.81% prediction accuracy and outperformed the SPY benchmark through risk management and continuous model optimization, resulting in improved CAGR, Sharpe, and Sortino ratios.',
  'Python, Random Forest, FinBERT, NLP, Pandas, Backtesting',
  '2024-01-01',
  '2024-05-31'
);

