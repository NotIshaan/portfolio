import { useEffect, useState } from "react";

export default function Experience() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/experience")
      .then(res => {
        if (!res.ok) throw new Error("Backend not reachable");
        return res.json();
      })
      .then(setData)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Experience</h1>
      {data.map(item => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{item.title} ({item.type})</h3>
          <p>{item.organization}</p>
          <p>{item.description}</p>
          <small>{item.start_date} → {item.end_date || "Present"}</small>
        </div>
      ))}
    </div>
  );
}

