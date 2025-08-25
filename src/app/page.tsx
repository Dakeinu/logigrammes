import Link from "next/link";

export default function Page() {
  const levels = [
    { id: 1, title: "Niveau 1", subtitle: "Fête Foraine" },
    { id: 2, title: "Niveau 2", subtitle: "Club de Lecture" },
    { id: 3, title: "Niveau 3", subtitle: "Voyage en Europe" },
    { id: 4, title: "Niveau 4", subtitle: "Festival de Musique" },
    { id: 5, title: "Niveau 5", subtitle: "Animaux de compagnie" },
    { id: 6, title: "Niveau 6", subtitle: "Compétition sportive" },
    { id: 7, title: "Niveau 7", subtitle: "Galeries d'un musée" },
    { id: 8, title: "Niveau 8", subtitle: "Parc d’attractions" },
    { id: 9, title: "Niveau 9", subtitle: "Outils de jardinage" },
    { id: 10, title: "Niveau 10", subtitle: "Salle de cinéma" },
    { id: 11, title: "Niveau 11", subtitle: "Vitrine de boulangerie" },
    { id: 12, title: "Niveau 12", subtitle: "Hackathon" }
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