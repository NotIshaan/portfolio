-- =========================
-- CLEANUP
-- =========================
TRUNCATE TABLE portfolio_schema.experience RESTART IDENTITY;

-- =========================
-- WORK EXPERIENCE
-- =========================

INSERT INTO portfolio_schema.experience
(type, title, organization, description, tech_stack, start_date, end_date)
VALUES
(
  'work',
  'Cloud Engineer Intern',
  'TraceLink',
  'Built Prometheus metrics and Grafana dashboards for ECS capacity, CPU, memory, and service health, promoted to production via Puppet. Investigated EC2 OOM issues caused by Fluent Bit buffering and resolved them by implementing filesystem buffering. Enabled SendGrid usage monitoring saving ~$900/month. Automating operational tasks using Python, Boto3, and AWS CLI.',
  'AWS, ECS, Prometheus, Grafana, Puppet, Linux, Python, Boto3',
  '2025-07-01',
  '2026-01-31'
),
(
  'work',
  'Machine Learning Intern',
  'ERIC Robotics',
  'Developed and deployed real-time object detection systems on Linux using YOLOv11 on Jetson AGX (~30 FPS). Built custom datasets with 10k+ images. Integrated CV pipelines with OpenCV and Flask for live video streaming and distance estimation.',
  'Python, YOLOv11, PyTorch, OpenCV, Jetson AGX, Linux, Flask',
  '2025-02-01',
  '2025-06-30'
),
(
  'work',
  'Web Development Intern',
  'Creative Sources General Trading LLC',
  'Contributed to web development projects in a fast-paced environment, enhancing frontend responsiveness and user experience.',
  'Web Development, Frontend',
  '2025-01-01',
  '2025-02-28'
),
(
  'work',
  'Video Editor',
  'Spectrum.FIT',
  'Produced high-quality video content for digital platforms.',
  'Video Editing, Content Creation',
  '2021-12-01',
  '2023-05-31'
);

-- =========================
-- PROJECTS
-- =========================

INSERT INTO portfolio_schema.experience
(type, title, organization, description, tech_stack, start_date, end_date)
VALUES
(
  'project',
  'Automatic Trading Bot',
  'Personal Project',
  'Developed an AI-driven trading bot using Random Forest for price prediction and FinBERT for sentiment analysis. Achieved 90.81% accuracy, outperforming SPY benchmark via rigorous risk management.',
  'Python, Random Forest, FinBERT, NLP, Pandas, Backtesting',
  '2024-01-01',
  '2024-05-31'
),
(
  'project',
  'Sign Language Detection',
  'Academic Project',
  'Real-time sign language recognition system using hybrid CNN-LSTM architecture for gesture-based text translation. Optimized for low-latency performance and accessibility.',
  'Python, Deep Learning, CNN, LSTM, OpenCV',
  '2024-06-01',
  '2024-11-30'
);
