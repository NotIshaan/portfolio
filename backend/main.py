from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
import psycopg2.extras
from fastapi.middleware.cors import CORSMiddleware
import os
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://portfolio-notishaans-projects.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DB Connection Function ---
def get_db_connection():
    retries = 5
    while retries:
        try:
            conn = psycopg2.connect(
                host=os.getenv("DB_HOST"),
                port=int(os.getenv("DB_PORT", 5432)),
                database=os.getenv("DB_NAME"),
                user=os.getenv("DB_USER"),
                password=os.getenv("DB_PASSWORD"),
            )
            return conn
        except Exception as e:
            print("DB connection failed, retrying...", e)
            retries -= 1
            time.sleep(2)

    return None


# --- Models ---
class ContactMessage(BaseModel):
    name: str
    email: str
    phone_number: str | None = None
    message: str


# --- Endpoints ---

@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/api/experience")
def get_experience():
    conn = get_db_connection()
    if not conn:
        raise HTTPException(status_code=500, detail="DB connection failed")

    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("""
        SELECT * FROM portfolio_schema.experience
        ORDER BY end_date IS NULL DESC, start_date DESC;
    """)
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return rows


@app.post("/api/contact")
def post_contact(msg: ContactMessage):
    conn = get_db_connection()
    if not conn:
        raise HTTPException(status_code=500, detail="DB connection failed")

    cur = conn.cursor()
    cur.execute(
        """
        INSERT INTO portfolio_schema.contact_messages
        (name, email, phone_number, message)
        VALUES (%s, %s, %s, %s)
        RETURNING id;
        """,
        (msg.name, msg.email, msg.phone_number, msg.message)
    )
    inserted_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return {"id": inserted_id, "status": "success"}

