--
-- PostgreSQL database dump
--

\restrict FjYILcz9buvU9FvCNfDsO8AATATfZEvOvqLQcvxyThsY8qSFTjIx9XqPkDh1Mb4

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: portfolio_schema; Type: SCHEMA; Schema: -; Owner: portfolio_user
--

CREATE SCHEMA portfolio_schema;


ALTER SCHEMA portfolio_schema OWNER TO portfolio_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contact_messages; Type: TABLE; Schema: portfolio_schema; Owner: portfolio_user
--

CREATE TABLE portfolio_schema.contact_messages (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone_number character varying(20),
    message text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE portfolio_schema.contact_messages OWNER TO portfolio_user;

--
-- Name: contact_messages_id_seq; Type: SEQUENCE; Schema: portfolio_schema; Owner: portfolio_user
--

CREATE SEQUENCE portfolio_schema.contact_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE portfolio_schema.contact_messages_id_seq OWNER TO portfolio_user;

--
-- Name: contact_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: portfolio_schema; Owner: portfolio_user
--

ALTER SEQUENCE portfolio_schema.contact_messages_id_seq OWNED BY portfolio_schema.contact_messages.id;


--
-- Name: experience; Type: TABLE; Schema: portfolio_schema; Owner: portfolio_user
--

CREATE TABLE portfolio_schema.experience (
    id integer NOT NULL,
    type character varying(10) NOT NULL,
    title character varying(255) NOT NULL,
    organization character varying(255) NOT NULL,
    description text,
    tech_stack text,
    start_date date,
    end_date date,
    created_at timestamp without time zone DEFAULT now(),
    CONSTRAINT experience_type_check CHECK (((type)::text = ANY ((ARRAY['work'::character varying, 'project'::character varying])::text[])))
);


ALTER TABLE portfolio_schema.experience OWNER TO portfolio_user;

--
-- Name: experience_id_seq; Type: SEQUENCE; Schema: portfolio_schema; Owner: portfolio_user
--

CREATE SEQUENCE portfolio_schema.experience_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE portfolio_schema.experience_id_seq OWNER TO portfolio_user;

--
-- Name: experience_id_seq; Type: SEQUENCE OWNED BY; Schema: portfolio_schema; Owner: portfolio_user
--

ALTER SEQUENCE portfolio_schema.experience_id_seq OWNED BY portfolio_schema.experience.id;


--
-- Name: contact_messages id; Type: DEFAULT; Schema: portfolio_schema; Owner: portfolio_user
--

ALTER TABLE ONLY portfolio_schema.contact_messages ALTER COLUMN id SET DEFAULT nextval('portfolio_schema.contact_messages_id_seq'::regclass);


--
-- Name: experience id; Type: DEFAULT; Schema: portfolio_schema; Owner: portfolio_user
--

ALTER TABLE ONLY portfolio_schema.experience ALTER COLUMN id SET DEFAULT nextval('portfolio_schema.experience_id_seq'::regclass);


--
-- Data for Name: contact_messages; Type: TABLE DATA; Schema: portfolio_schema; Owner: portfolio_user
--

COPY portfolio_schema.contact_messages (id, name, email, phone_number, message, created_at) FROM stdin;
1	Ishaan	ishaan@example.com	9876543210	Hello	2026-01-23 19:33:32.29195
2	Ishaan	ibhadrike24@gmail.com	+91 9152107274	hello hello testing\n	2026-01-30 20:56:12.085087
\.


--
-- Data for Name: experience; Type: TABLE DATA; Schema: portfolio_schema; Owner: portfolio_user
--

COPY portfolio_schema.experience (id, type, title, organization, description, tech_stack, start_date, end_date, created_at) FROM stdin;
2	work	Machine Learning Intern	ERIC Robotics, Pune	Developed and deployed real-time object detection systems on Linux using YOLOv11 on Jetson AGX, achieving ~30 FPS inference for robotics applications. Built and curated large-scale computer vision datasets with over 10,000 annotated images, improving model accuracy by 15% using augmentation techniques in Roboflow. Integrated OpenCV and Flask-based pipelines for live video streaming, distance estimation, and automated logging.	Python, YOLOv11, PyTorch, OpenCV, Jetson AGX, Roboflow, Linux, Flask	2025-02-01	2025-06-30	2026-01-25 20:09:58.524947
3	work	Cloud Engineer Intern	TraceLink, Pune	Built Prometheus metrics and Grafana dashboards for ECS capacity, CPU, memory, and service health, promoted to production via Puppet and used by CloudOps teams for incident triage. Investigated EC2 out-of-memory issues caused by Fluent Bit buffering and resolved recurring OOM kills by implementing filesystem buffering. Enabled SendGrid usage monitoring, contributing to approximately $900/month in cloud cost savings. Resolved 150+ CloudOps tickets including EC2 outages, access provisioning, and AS2/SFTP integrations using CLEO Harmony. Automated operational tasks using Python, Boto3, AWS CLI, and Linux tooling.	AWS, EC2, ECS, Prometheus, Grafana, Puppet, Linux, Python, Boto3, OpenSearch	2025-07-01	\N	2026-01-25 20:09:58.524947
4	project	Sign Language Detection using CNN-LSTM	Academic Research Project	Developed a real-time sign language recognition system using a hybrid CNN-LSTM architecture for gesture-based text translation. Optimized the pipeline for accuracy and low-latency performance, improving real-world usability in accessibility-focused applications.	Python, Deep Learning, CNN, LSTM, OpenCV	2024-06-01	2024-11-30	2026-01-25 20:09:58.527004
5	project	Automatic Trading Bot	Personal Project	Built an AI-driven trading bot using Random Forest for asset price prediction and FinBERT for financial news sentiment analysis. Achieved 90.81% prediction accuracy and outperformed the SPY benchmark through risk management and continuous model optimization, resulting in improved CAGR, Sharpe, and Sortino ratios.	Python, Random Forest, FinBERT, NLP, Pandas, Backtesting	2024-01-01	2024-05-31	2026-01-25 20:09:58.527004
\.


--
-- Name: contact_messages_id_seq; Type: SEQUENCE SET; Schema: portfolio_schema; Owner: portfolio_user
--

SELECT pg_catalog.setval('portfolio_schema.contact_messages_id_seq', 2, true);


--
-- Name: experience_id_seq; Type: SEQUENCE SET; Schema: portfolio_schema; Owner: portfolio_user
--

SELECT pg_catalog.setval('portfolio_schema.experience_id_seq', 5, true);


--
-- Name: contact_messages contact_messages_pkey; Type: CONSTRAINT; Schema: portfolio_schema; Owner: portfolio_user
--

ALTER TABLE ONLY portfolio_schema.contact_messages
    ADD CONSTRAINT contact_messages_pkey PRIMARY KEY (id);


--
-- Name: experience experience_pkey; Type: CONSTRAINT; Schema: portfolio_schema; Owner: portfolio_user
--

ALTER TABLE ONLY portfolio_schema.experience
    ADD CONSTRAINT experience_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict FjYILcz9buvU9FvCNfDsO8AATATfZEvOvqLQcvxyThsY8qSFTjIx9XqPkDh1Mb4

