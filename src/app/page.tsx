import Link from "next/link";

export default function Page() {
  const levels = [
    { id: 1, title: "Niveau 1", subtitle: "Fête Foraine" }
    // Tu pourras ajouter {id:2,...} ici
  ];

  return (
    <main style={{ maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", margin: "0.5em 0" }}>Choisis ton niveau</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
        {levels.map(l => (
          <Link
            key={l.id}
            href={`/puzzle/${l.id}`}
            style={{
              textDecoration: "none",
              border: "1px solid #eaeaea",
              background: "#fff",
              borderRadius: 12,
              padding: 16,
              boxShadow: "0 2px 6px rgba(0,0,0,.06)"
            }}
          >
            <h2 style={{ margin: "0 0 8px" }}>{l.title}</h2>
            <p style={{ margin: 0, color: "#555", textAlign: "center" }}>{l.subtitle}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}