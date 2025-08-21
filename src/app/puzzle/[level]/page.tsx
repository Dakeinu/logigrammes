"use client";

import { useEffect, use as reactUse } from "react";
import Image from "next/image";
import Link from "next/link";

/** Types utilitaires */
type Solution = Record<string, Record<string, string>>;

interface Config {
  participants: string[];
  categories: string[];
  recapClassByCategory: Record<string, string>;
  solution: Solution;
}

type LevelConfig = {
  level: string;
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  participants: string[];
  categories: [string, string, string];
  values: Record<string, string[]>;
  hints: string[];
  solution: Solution;
  recapClasses: Record<string, string>;
};

const LEVEL_CONFIGS: Record<string, LevelConfig> = {
  "1": {
    level: "1",
    title: "Qui a gagné quoi à la fête foraine ?",
    subtitle: "Niveau 1",
    image: {
      src: "https://www.bonpourlesoreilles.net/wp-content/uploads/2019/01/histoire-fete-foraine.jpg",
      alt: "Ballons de fête foraine",
    },
    participants: ["Alice", "Benoît", "Clara", "David"],
    categories: ["Ballon", "Boisson", "Lot"],
    values: {
      Ballon: ["Rouge", "Bleu", "Vert", "Jaune"],
      Boisson: ["Soda", "Jus", "Limonade", "Thé glacé"],
      Lot: ["Peluche", "Casquette", "Bonbon géant", "Porte-clés"],
    },
    hints: [
      "La personne qui a gagné la <strong>Peluche</strong> a bu du <strong>Jus</strong>.",
      "<strong>Benoît</strong> n’a pas eu de ballon <strong>Rouge</strong> ni <strong>Vert</strong>.",
      "Le ballon <strong>Jaune</strong> est associé au <strong>Thé glacé</strong>.",
      "<strong>Clara</strong> n’a pas gagné la <strong>Casquette</strong>.",
      "La personne au ballon <strong>Bleu</strong> a bu du <strong>Soda</strong>.",
      "<strong>Alice</strong> n’a pas gagné de <strong>Porte-clés</strong>.",
      "La <strong>Limonade</strong> est allée avec le <strong>Porte-clés</strong>.",
      "Le <strong>Bonbon géant</strong> n’est allé ni à <strong>Alice</strong> ni à <strong>Benoît</strong>.",
    ],
    solution: {
      Alice: { Ballon: "Rouge", Boisson: "Jus", Lot: "Peluche" },
      "Benoît": { Ballon: "Bleu", Boisson: "Soda", Lot: "Casquette" },
      Clara: { Ballon: "Vert", Boisson: "Limonade", Lot: "Porte-clés" },
      David: { Ballon: "Jaune", Boisson: "Thé glacé", Lot: "Bonbon géant" },
    },
    recapClasses: { Ballon: "r-ball", Boisson: "r-bois", Lot: "r-lot" },
  },
  "2": {
    level: "2",
    title: "Club de lecture : qui lit quoi et avec quel accessoire ?",
    subtitle: "Niveau 2",
    image: {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;auto=format&amp;fit=crop&amp;w=1200&amp;h=600",
      alt: "Club de lecture avec livres et boissons chaudes",
    },
    participants: ["Emma", "Félix", "Jade", "Lucas"],
    categories: ["Genre", "Boisson", "Accessoire"],
    values: {
      Genre: ["Policier", "Fantastique", "Historique", "Science-fiction"],
      Boisson: ["Café", "Thé", "Chocolat chaud", "Cappuccino"],
      Accessoire: ["Marque-page", "Lunettes", "Écharpe", "Carnet"],
    },
    hints: [
      "La personne qui lit le <strong>Fantastique</strong> boit du <strong>Thé</strong>.",
      "Le <strong>Café</strong> n’est pas bu par <strong>Lucas</strong> ni par le lecteur du <strong>Historique</strong>.",
      "Les <strong>Lunettes</strong> sont associées au <strong>Policier</strong>.",
      "<strong>Emma</strong> n’utilise pas d’<strong>Écharpe</strong>.",
      "Le <strong>Cappuccino</strong> va avec la <strong>Science-fiction</strong>.",
      "<strong>Jade</strong> n’a ni le <strong>Marque-page</strong> ni le genre <strong>Policier</strong>.",
      "Le <strong>Chocolat chaud</strong> est allé avec le <strong>Carnet</strong>.",
      "<strong>Félix</strong> n’a pas bu de <strong>Thé</strong> et il ne lit pas la <strong>Science-fiction</strong>.",
    ],
    solution: {
      Emma: { Genre: "Fantastique", Boisson: "Thé", Accessoire: "Marque-page" },
      "Félix": { Genre: "Policier", Boisson: "Café", Accessoire: "Lunettes" },
      Jade: { Genre: "Historique", Boisson: "Chocolat chaud", Accessoire: "Carnet" },
      Lucas: { Genre: "Science-fiction", Boisson: "Cappuccino", Accessoire: "Écharpe" },
    },
    recapClasses: { Genre: "r-genre", Boisson: "r-bois", Accessoire: "r-acc" },
  },
};

function PuzzleView({ cfg }: { cfg: LevelConfig }) {
  const [CAT_A, CAT_B, CAT_C] = cfg.categories;
  const valsA = cfg.values[CAT_A];
  const valsB = cfg.values[CAT_B];
  const valsC = cfg.values[CAT_C];

  return (
    <main style={{ maxWidth: 980, margin: "0 auto" }}>
      <h2>{cfg.title}</h2>
      <h3>{cfg.subtitle}</h3>

      <div className="controls" style={{ textAlign: "center", marginBottom: 16 }}>
        <Link href="/" className="btn">← Sélection de niveau</Link>
      </div>

      <img
        src={cfg.image.src}
        alt={cfg.image.alt}
        className="illus"
        width={1200}
        height={600}
      />

      {/* Indices */}
      <section id="hints" className="hints card">
        <div className="card-body">
          <div className="hints-header">
            <h4 className="hints-title">Indices</h4>
            <button id="toggleHints" className="btn" type="button">Masquer les indices</button>
          </div>
          <ol className="hints-list" id="hintsList">
            {cfg.hints.map((h, i) => (
              <li key={i}><span dangerouslySetInnerHTML={{ __html: h }} /></li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Grille (structure identique, libellés dynamiques) ===== */}
      <div className="gridWrap">
        <table className="grid" id="grid">
          <tbody>
            <tr>
              <th className="sideLabel topBlank groupLeft"></th>
              <th className="sideLabel topBlank rowLeft"></th>
              <th className="colHead col-1" colSpan={4}>{CAT_A}</th>
              <th className="colHead col-2" colSpan={4}>{CAT_B}</th>
              <th className="colHead col-3" colSpan={4}>{CAT_C}</th>
            </tr>
            <tr>
              <th className="sideLabel groupLeft"></th>
              <th className="sideLabel rowLeft"></th>
              {valsA.map((v) => (<th key={`${CAT_A}-${v}`} className="v col-1">{v}</th>))}
              {valsB.map((v) => (<th key={`${CAT_B}-${v}`} className="v col-2">{v}</th>))}
              {valsC.map((v) => (<th key={`${CAT_C}-${v}`} className="v col-3">{v}</th>))}
            </tr>

            {/* ===== Bloc 1 : PERSONNE ===== */}
            {cfg.participants.map((p, idx) => (
              <tr key={`p-${p}`} className="block-1">
                {idx === 0 && <th rowSpan={cfg.participants.length} className="sideLabel groupLeft row-1">Personne</th>}
                <th className="rowLeft">{p}</th>
                {valsA.map((v) => (
                  <td key={`${p}-${CAT_A}-${v}`} className="cell col-1" data-person={p} data-category={CAT_A} data-value={v}></td>
                ))}
                {valsB.map((v) => (
                  <td key={`${p}-${CAT_B}-${v}`} className="cell col-2" data-person={p} data-category={CAT_B} data-value={v}></td>
                ))}
                {valsC.map((v) => (
                  <td key={`${p}-${CAT_C}-${v}`} className="cell col-3" data-person={p} data-category={CAT_C} data-value={v}></td>
                ))}
              </tr>
            ))}

            {/* ===== Bloc 2 : {CAT_C} (paires avec A &amp; B) ===== */}
            {valsC.map((left, idxRow) => (
              <tr key={`c-${left}`} className="block-2">
                {idxRow === 0 && <th rowSpan={valsC.length} className="sideLabel groupLeft row-2">{CAT_C}</th>}
                <th className="rowLeft">{left}</th>
                {valsA.map((top) => (
                  <td key={`${CAT_C}|${CAT_A}-${left}-${top}`}
                    className="cell col-1"
                    data-pair={`${CAT_C}|${CAT_A}`}
                    data-leftcat={CAT_C}
                    data-left={left}
                    data-topcat={CAT_A}
                    data-top={top}></td>
                ))}
                {valsB.map((top) => (
                  <td key={`${CAT_C}|${CAT_B}-${left}-${top}`}
                    className="cell col-2"
                    data-pair={`${CAT_C}|${CAT_B}`}
                    data-leftcat={CAT_C}
                    data-left={left}
                    data-topcat={CAT_B}
                    data-top={top}></td>
                ))}
                <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
              </tr>
            ))}

            {/* ===== Bloc 3 : {CAT_B} (paires avec A) ===== */}
            {valsB.map((left, idxRow) => (
              <tr key={`b-${left}`} className="block-boisson">
                {idxRow === 0 && <th rowSpan={valsB.length} className="sideLabel groupLeft row-3">{CAT_B}</th>}
                <th className="rowLeft">{left}</th>
                {valsA.map((top) => (
                  <td key={`${CAT_B}|${CAT_A}-${left}-${top}`}
                    className="cell col-1"
                    data-pair={`${CAT_B}|${CAT_A}`}
                    data-leftcat={CAT_B}
                    data-left={left}
                    data-topcat={CAT_A}
                    data-top={top}></td>
                ))}
                <td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td>
                <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="controls" style={{ flexWrap: "wrap" }}>
        <button id="undo" className="btn" type="button" disabled>Annuler (Ctrl+Z)</button>
        <button id="reset" className="btn" type="button">Effacer la grille</button>
        <button id="toggleCorrection" className="btn" type="button">Afficher la correction</button>
      </div>

      <table className="answers" id="recap">
        <thead>
          <tr>
            <th>Participant</th>
            {cfg.categories.map((c) => (<th key={`recap-head-${c}`}>{c}</th>))}
          </tr>
        </thead>
        <tbody>
          {cfg.participants.map((p) => (
            <tr key={`recap-${p}`} data-person={p}>
              <th>{p}</th>
              {cfg.categories.map((c) => (
                <td key={`recap-${p}-${c}`} className={cfg.recapClasses[c]}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <table className="answers hidden" id="solution">
        <thead>
          <tr>
            <th>Correction</th>
            {cfg.categories.map((c) => (<th key={`sol-head-${c}`}>{c}</th>))}
          </tr>
        </thead>
        <tbody>
          {cfg.participants.map((p) => (
            <tr key={`sol-${p}`} data-person={p}>
              <th>{p}</th>
              {cfg.categories.map((c) => (<td key={`sol-${p}-${c}`} className={`s-${c.toLowerCase()}`}>—</td>))}
            </tr>
          ))}
        </tbody>
      </table>

      <script
        id="puzzle-solution"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cfg.solution),
        }}
      />
    </main>
  );
}

/** Helpers d'attributs data-* pour éviter dataset:any */
const getData = (el: Element, key: string): string | null =>
  el.getAttribute(`data-${key}`);

const setData = (el: Element, key: string, value: string | null) => {
  if (value === null || value === "") el.removeAttribute(`data-${key}`);
  else el.setAttribute(`data-${key}`, value);
};

export default function PuzzlePage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = reactUse(params);

  useEffect(() => {
    const grid = document.getElementById("grid") as HTMLTableElement | null;
    const recapTable = document.getElementById("recap") as HTMLTableElement | null;
    const solutionTable = document.getElementById("solution") as HTMLTableElement | null;
    if (!grid || !recapTable || !solutionTable) return;

    // --- Historique pour annuler (Ctrl+Z / bouton) ---
    type CellState = "" | "no" | "ok";
    let history: Array<{ el: HTMLElement; prev: CellState; next: CellState }> = [];

    function updateUndoButton() {
      const btn = document.getElementById("undo") as HTMLButtonElement | null;
      if (!btn) return;
      if (history.length === 0) btn.setAttribute("disabled", "true");
      else btn.removeAttribute("disabled");
    }

    function performUndo() {
      const last = history.pop();
      if (!last) return;
      // Restaurer l'état précédent
      setState(last.el, last.prev);
      recomputeForbidden();
      updateRecap();
      saveProgress();
      updateUndoButton();
    }

    // Raccourci clavier Ctrl+Z / Cmd+Z
    document.addEventListener("keydown", (e) => {
      const isUndo = (e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
      if (!isUndo) return;
      e.preventDefault();
      performUndo();
    });

    const CELL_STATES: Array<"" | "no" | "ok"> = ["", "no", "ok"];

    function inferParticipants(): string[] {
      const rows = recapTable ? Array.from(recapTable.querySelectorAll('tbody tr[data-person]')) : [];
      if (rows.length) {
        return rows
          .map((r) => r.getAttribute("data-person"))
          .filter((v): v is string => !!v);
      }
      const ths = grid ? Array.from(grid.querySelectorAll("tr.block-1 .rowLeft")) : [];
      if (ths.length) return ths.map((th) => (th as HTMLElement).textContent?.trim() || "").filter(Boolean);
      return [];
    }

    function inferCategories(): string[] {
      const heads = recapTable
        ? Array.from(recapTable.querySelectorAll("thead th"))
            .map((th) => (th as HTMLElement).textContent?.trim() || "")
            .filter(Boolean)
        : [];
      if (heads.length > 1) return heads.slice(1);
      const colHeads = grid
        ? Array.from(grid.querySelectorAll(".colHead"))
            .map((th) => (th as HTMLElement).textContent?.trim() || "")
            .filter(Boolean)
        : [];
      if (colHeads.length) return colHeads;
      return [];
    }

    function inferRecapClassByCategory(categories: string[]): Record<string, string> {
      const firstRow = recapTable ? recapTable.querySelector("tbody tr") : null;
      const headCats = recapTable
        ? Array.from(recapTable.querySelectorAll("thead th"))
            .map((th) => th.textContent?.trim() || "")
            .slice(1)
        : [];
      const cells = firstRow ? Array.from(firstRow.querySelectorAll("td")) : [];
      const map: Record<string, string> = {};
      headCats.forEach((cat, i) => {
        const td = cells[i];
        if (!td) return;
        const cls = Array.from(td.classList).find((c) => c.startsWith("r-"));
        if (cls) map[cat] = cls;
      });
      categories.forEach((cat) => {
        if (!map[cat]) map[cat] = `r-${cat.toLowerCase()}`;
      });
      return map;
    }

    function readJsonSolution(): Solution | null {
      const el = document.getElementById("puzzle-solution");
      if (el) {
        const raw = el.textContent?.trim();
        if (raw) {
          try {
            return JSON.parse(raw) as Solution;
          } catch {
            /* ignore */
          }
        }
      }
      return null;
    }

    const CONFIG: Config = {
      participants: inferParticipants(),
      categories: inferCategories(),
      recapClassByCategory: {},
      solution: readJsonSolution() ?? {},
    };
    CONFIG.recapClassByCategory = inferRecapClassByCategory(CONFIG.categories);

    // --- Persistence (localStorage) ---
    const STORAGE_KEY = `puzzle-progress-${level}`;
    const HINTS_STORAGE_KEY = `puzzle-hints-${level}`;

    function saveHintsState() {
      try {
        const list = document.querySelectorAll("#hintsList li");
        const checked: number[] = [];
        list.forEach((li, idx) => {
          const el = li as HTMLElement;
          if (el.style.textDecoration === "line-through") {
            checked.push(idx);
          }
        });
        localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(checked));
      } catch {}
    }

    function applySavedHints() {
      try {
        const raw = localStorage.getItem(HINTS_STORAGE_KEY);
        if (!raw) return;
        const checked = JSON.parse(raw) as number[];
        const set = new Set(checked);
        document.querySelectorAll("#hintsList li").forEach((li, idx) => {
          const el = li as HTMLElement;
          el.style.cursor = "pointer";
          el.style.textDecoration = set.has(idx) ? "line-through" : "";
        });
      } catch {}
    }

    function makeCellKey(td: Element): string {
      return [
        getData(td, "person") || "",
        getData(td, "category") || "",
        getData(td, "value") || "",
        getData(td, "pair") || "",
        getData(td, "left") || "",
        getData(td, "top") || "",
      ].join("|");
    }

    function saveProgress() {
      if (!grid) return;
      const data: Record<string, string> = {};
      grid.querySelectorAll(".cell").forEach((td) => {
        const state = getData(td, "state") || "";
        if (state) {
          data[makeCellKey(td)] = state;
        }
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch {}
    }

    function loadProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw) as Record<string, string>;
        grid?.querySelectorAll(".cell").forEach((td) => {
          const key = makeCellKey(td);
          const st = data[key];
          if (st === "ok" || st === "no") {
            setState(td as HTMLElement, st);
          } else if (!st) {
            // leave empty
          }
        });
      } catch {}
    }

    function setState(td: HTMLElement, state: "" | "no" | "ok") {
      setData(td, "state", state);
      td.innerHTML = "";
      if (state === "ok") {
        const s = document.createElement("span");
        s.className = "mark ok";
        s.textContent = "◯";
        td.appendChild(s);
      } else if (state === "no") {
        const s = document.createElement("span");
        s.className = "mark no";
        s.textContent = "✗";
        td.appendChild(s);
      }
    }

    function setForbidden(td: HTMLElement, on: boolean) {
      const current = getData(td, "state");

      // Never overwrite a manual user choice
      if (current === "ok" || current === "no") return;

      if (on) {
        // mark as auto-forbid without changing the user state
        td.setAttribute("data-autoforbid", "1");
        td.classList.add("forbid");
        // render a subtle dot if and only if the cell is otherwise empty
        if (!current) {
          td.innerHTML = "";
          const s = document.createElement("span");
          s.className = "mark forbid";
          s.textContent = "✗"; // distinct from the user's red cross
          td.appendChild(s);
        }
      } else {
        // remove auto forbid only
        if (td.getAttribute("data-autoforbid") === "1") {
          td.removeAttribute("data-autoforbid");
          td.classList.remove("forbid");
          // Clear the dot only if there's no manual state
          if (!current) {
            td.innerHTML = "";
          }
        }
      }
    }

    function recomputeForbidden() {
      grid?.querySelectorAll('.cell').forEach((cell) => {
        const td = cell as HTMLElement;
        // Only clear previous auto-forbid markers
        if (td.getAttribute('data-autoforbid') === '1') {
          td.removeAttribute('data-autoforbid');
          td.classList.remove('forbid');
          // remove visual dot if cell has no manual state
          if (!getData(td, 'state')) {
            td.innerHTML = '';
          }
        }
      });

      // Règle A
      CONFIG.participants.forEach((person) => {
        CONFIG.categories.forEach((category) => {
          const cells = Array.from(
            grid?.querySelectorAll(`.cell[data-person="${person}"][data-category="${category}"]`) || []
          );
          const ok = cells.find((c) => getData(c, "state") === "ok");
          if (ok) cells.forEach((c) => { if (c !== ok) setForbidden(c as HTMLElement, true); });
        });
      });

      // Règle B
      CONFIG.categories.forEach((category) => {
        const allValueCells = Array.from(
          grid?.querySelectorAll(`.cell[data-category="${category}"][data-person]`) || []
        );
        const values = [...new Set(allValueCells.map((td) => getData(td, "value") || ""))];
        values.forEach((value) => {
          const sameValueCells = allValueCells.filter((td) => getData(td, "value") === value);
          const ok = sameValueCells.find((td) => getData(td, "state") === "ok");
          if (ok) sameValueCells.forEach((td) => { if (td !== ok) setForbidden(td as HTMLElement, true); });
        });
      });

      // Règle C (paires)
      const pairs = [
        ...new Set(
          Array.from(grid?.querySelectorAll('.cell[data-pair]') || []).map((td) => getData(td, "pair") || "")
        ),
      ];
      pairs.forEach((pair) => {
        const cells = grid ? Array.from(grid.querySelectorAll(`.cell[data-pair="${pair}"]`)) : [];
        const lefts = [...new Set(cells.map((td) => getData(td, "left") || ""))];
        lefts.forEach((left) => {
          const rowCells = cells.filter((td) => getData(td, "left") === left);
          const ok = rowCells.find((td) => getData(td, "state") === "ok");
          if (ok) rowCells.forEach((td) => { if (td !== ok) setForbidden(td as HTMLElement, true); });
        });
        const tops = [...new Set(cells.map((td) => getData(td, "top") || ""))];
        tops.forEach((top) => {
          const colCells = cells.filter((td) => getData(td, "top") === top);
          const ok = colCells.find((td) => getData(td, "state") === "ok");
          if (ok) colCells.forEach((td) => { if (td !== ok) setForbidden(td as HTMLElement, true); });
        });
      });
    }

    function updateRecap() {
      CONFIG.participants.forEach((p) => {
        CONFIG.categories.forEach((cat) => {
          const ok = Array.from(
            grid?.querySelectorAll(`.cell[data-person="${p}"][data-category="${cat}"][data-state="ok"]`) || []
          );
          const val = ok.map((td) => getData(td, "value")).filter(Boolean) as string[];
          const cls = CONFIG.recapClassByCategory[cat];
          const cell = document.querySelector(
            `#recap tbody tr[data-person="${p}"] .${cls}`
          ) as HTMLElement | null;
          if (!cell) return;
          if (val.length === 1) cell.textContent = val[0];
          else if (val.length === 0) cell.textContent = "—";
          else cell.textContent = "⚠︎ multiple";
        });
      });
    }

    function fillSolution(map: Solution) {
      if (!map) return;
      CONFIG.participants.forEach((p) => {
        const row = document.querySelector(`#solution tbody tr[data-person="${p}"]`);
        if (!row || !map[p]) return;
        const headers = solutionTable
          ? Array.from(solutionTable.querySelectorAll("thead th"))
              .map((th) => th.textContent?.trim() || "")
              .slice(1)
          : [];
        const tds = Array.from(row.querySelectorAll("td"));
        headers.forEach((cat, i) => {
          const td = tds[i] as HTMLElement | undefined;
          if (td) td.textContent = map[p][cat] || "—";
        });
      });
    }

    grid.addEventListener("click", (e) => {
      const td = (e.target as HTMLElement).closest(".cell") as HTMLElement | null;
      if (!td) return;

      // 🚫 Bloquer tout clic sur une cellule grisée automatiquement
      if (td.getAttribute('data-autoforbid') === '1') {
        return; // ne pas autoriser la modification d'une cellule auto-forbid
      }

      const cur = (getData(td, "state") as CellState | null) || "";
      const next = CELL_STATES[(CELL_STATES.indexOf(cur) + 1) % CELL_STATES.length] as CellState;

      // Appliquer la modification
      setState(td, next);

      // Enregistrer uniquement les actions manuelles de l'utilisateur
      if (cur !== next) {
        history.push({ el: td, prev: cur, next });
        updateUndoButton();
      }

      recomputeForbidden();
      updateRecap();
      saveProgress();
    });

    document.getElementById("reset")?.addEventListener("click", () => {
      grid.querySelectorAll(".cell").forEach((td) => setState(td as HTMLElement, ""));
      updateRecap();
      recomputeForbidden();
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      history = [];
      updateUndoButton();
    });

    document.getElementById("undo")?.addEventListener("click", () => {
      performUndo();
    });

    document.getElementById("toggleCorrection")?.addEventListener("click", () => {
      const sol = solutionTable;
      const btn = document.getElementById("toggleCorrection") as HTMLButtonElement | null;
      if (!btn) return;
      sol.classList.toggle("hidden");
      btn.textContent = sol.classList.contains("hidden")
        ? "Afficher la correction"
        : "Masquer la correction";
    });

    document.getElementById("toggleHints")?.addEventListener("click", () => {
      const list = document.getElementById("hintsList");
      const btn = document.getElementById("toggleHints") as HTMLButtonElement | null;
      if (!list || !btn) return;
      list.classList.toggle("hidden");
      btn.textContent = list.classList.contains("hidden")
        ? "Afficher les indices"
        : "Masquer les indices";
    });

    // Toggle strikethrough on hint click + pointer cursor (with persistence)
    applySavedHints();
    document.querySelectorAll("#hintsList li").forEach((li) => {
      const el = li as HTMLElement;
      el.style.cursor = "pointer";
      li.addEventListener("click", () => {
        el.style.textDecoration = el.style.textDecoration === "line-through" ? "" : "line-through";
        saveHintsState();
      });
    });

    fillSolution(CONFIG.solution);
    loadProgress();
    updateRecap();
    recomputeForbidden();
  }, [level]);

  const cfg = LEVEL_CONFIGS[level];

  if (!cfg) {
    return (
      <main style={{ maxWidth: 980, margin: "0 auto" }}>
        <h2>Niveau {level}</h2>
        <p>Ce niveau n’est pas encore défini.</p>
      </main>
    );
  }

  return <PuzzleView cfg={cfg} />;
}