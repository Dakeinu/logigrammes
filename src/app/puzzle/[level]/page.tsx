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
      if (td.getAttribute('data-autoforbid') === '1') {
        td.removeAttribute('data-autoforbid');
        td.classList.remove('forbid');
        // clear the dot if there was no manual state yet
        if (!getData(td, 'state')) td.innerHTML = '';
      }
      const cur = (getData(td, "state") as "" | "no" | "ok" | null) || "";
      const next = CELL_STATES[(CELL_STATES.indexOf(cur) + 1) % CELL_STATES.length];
      setState(td, next);
      recomputeForbidden();
      updateRecap();
    });

    document.getElementById("reset")?.addEventListener("click", () => {
      grid.querySelectorAll(".cell").forEach((td) => setState(td as HTMLElement, ""));
      updateRecap();
      recomputeForbidden();
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

    fillSolution(CONFIG.solution);
    updateRecap();
    recomputeForbidden();
  }, [level]);

  if (level !== "1") {
    return (
      <main style={{ maxWidth: 980, margin: "0 auto" }}>
        <h2>Niveau {level}</h2>
        <p>Ce niveau n’est pas encore défini.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 980, margin: "0 auto" }}>
      <h2>Qui a gagné quoi à la fête foraine ?</h2>
      <h3>Niveau 1</h3>

      <div className="controls" style={{ textAlign: "center", marginBottom: 16 }}>
        <Link href="/" className="btn">← Retour aux niveaux</Link>
      </div>

      {/* Remplace <img> par next/image pour éviter next/no-img-element */}
      {/* <Image
        src="./fete.jpg"
        alt="Ballons de fête foraine"
        className="illus"
        width={1200}
        height={600}
        priority
      /> */}
      <img
        src="https://www.bonpourlesoreilles.net/wp-content/uploads/2019/01/histoire-fete-foraine.jpg"
        alt="Ballons de fête foraine"
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
            <li>La personne qui a gagné la <strong>Peluche</strong> a bu du <strong>Jus</strong>.</li>
            <li><strong>Benoît</strong> n’a pas eu de ballon <strong>Rouge</strong> ni <strong>Vert</strong>.</li>
            <li>Le ballon <strong>Jaune</strong> est associé au <strong>Thé glacé</strong>.</li>
            <li><strong>Clara</strong> n’a pas gagné la <strong>Casquette</strong>.</li>
            <li>La personne au ballon <strong>Bleu</strong> a bu du <strong>Soda</strong>.</li>
            <li><strong>Alice</strong> n’a pas gagné de <strong>Porte-clés</strong>.</li>
            <li>La <strong>Limonade</strong> est allée avec le <strong>Porte-clés</strong>.</li>
            <li>Le <strong>Bonbon géant</strong> n’est allé ni à <strong>Alice</strong> ni à <strong>Benoît</strong>.</li>
          </ol>
        </div>
      </section>

      {/* ===== Grille (identique, class -> className) ===== */}
      <div className="gridWrap">
        <table className="grid" id="grid">
          <tbody>
            <tr>
              <th className="sideLabel topBlank groupLeft"></th>
              <th className="sideLabel topBlank rowLeft"></th>
              <th className="colHead col-1" colSpan={4}>Ballon</th>
              <th className="colHead col-2" colSpan={4}>Boisson</th>
              <th className="colHead col-3" colSpan={4}>Lot</th>
            </tr>
            <tr>
              <th className="sideLabel groupLeft"></th>
              <th className="sideLabel rowLeft"></th>
              <th className="v col-1">Rouge</th>
              <th className="v col-1">Bleu</th>
              <th className="v col-1">Vert</th>
              <th className="v col-1">Jaune</th>
              <th className="v col-2">Soda</th>
              <th className="v col-2">Jus</th>
              <th className="v col-2">Limonade</th>
              <th className="v col-2">Thé glacé</th>
              <th className="v col-3">Peluche</th>
              <th className="v col-3">Casquette</th>
              <th className="v col-3">Bonbon géant</th>
              <th className="v col-3">Porte-clés</th>
            </tr>

            {/* ===== Bloc 1 : PERSONNE ===== */}
            {/* Alice */}
            <tr className="block-1">
              <th rowSpan={4} className="sideLabel groupLeft row-1">Personne</th>
              <th className="rowLeft">Alice</th>
              <td className="cell col-1" data-person="Alice" data-category="Ballon" data-value="Rouge"></td>
              <td className="cell col-1" data-person="Alice" data-category="Ballon" data-value="Bleu"></td>
              <td className="cell col-1" data-person="Alice" data-category="Ballon" data-value="Vert"></td>
              <td className="cell col-1" data-person="Alice" data-category="Ballon" data-value="Jaune"></td>
              <td className="cell col-2" data-person="Alice" data-category="Boisson" data-value="Soda"></td>
              <td className="cell col-2" data-person="Alice" data-category="Boisson" data-value="Jus"></td>
              <td className="cell col-2" data-person="Alice" data-category="Boisson" data-value="Limonade"></td>
              <td className="cell col-2" data-person="Alice" data-category="Boisson" data-value="Thé glacé"></td>
              <td className="cell col-3" data-person="Alice" data-category="Lot" data-value="Peluche"></td>
              <td className="cell col-3" data-person="Alice" data-category="Lot" data-value="Casquette"></td>
              <td className="cell col-3" data-person="Alice" data-category="Lot" data-value="Bonbon géant"></td>
              <td className="cell col-3" data-person="Alice" data-category="Lot" data-value="Porte-clés"></td>
            </tr>
            {/* Benoît */}
            <tr className="block-1">
              <th className="rowLeft">Benoît</th>
              <td className="cell col-1" data-person="Benoît" data-category="Ballon" data-value="Rouge"></td>
              <td className="cell col-1" data-person="Benoît" data-category="Ballon" data-value="Bleu"></td>
              <td className="cell col-1" data-person="Benoît" data-category="Ballon" data-value="Vert"></td>
              <td className="cell col-1" data-person="Benoît" data-category="Ballon" data-value="Jaune"></td>
              <td className="cell col-2" data-person="Benoît" data-category="Boisson" data-value="Soda"></td>
              <td className="cell col-2" data-person="Benoît" data-category="Boisson" data-value="Jus"></td>
              <td className="cell col-2" data-person="Benoît" data-category="Boisson" data-value="Limonade"></td>
              <td className="cell col-2" data-person="Benoît" data-category="Boisson" data-value="Thé glacé"></td>
              <td className="cell col-3" data-person="Benoît" data-category="Lot" data-value="Peluche"></td>
              <td className="cell col-3" data-person="Benoît" data-category="Lot" data-value="Casquette"></td>
              <td className="cell col-3" data-person="Benoît" data-category="Lot" data-value="Bonbon géant"></td>
              <td className="cell col-3" data-person="Benoît" data-category="Lot" data-value="Porte-clés"></td>
            </tr>
            {/* Clara */}
            <tr className="block-1">
              <th className="rowLeft">Clara</th>
              <td className="cell col-1" data-person="Clara" data-category="Ballon" data-value="Rouge"></td>
              <td className="cell col-1" data-person="Clara" data-category="Ballon" data-value="Bleu"></td>
              <td className="cell col-1" data-person="Clara" data-category="Ballon" data-value="Vert"></td>
              <td className="cell col-1" data-person="Clara" data-category="Ballon" data-value="Jaune"></td>
              <td className="cell col-2" data-person="Clara" data-category="Boisson" data-value="Soda"></td>
              <td className="cell col-2" data-person="Clara" data-category="Boisson" data-value="Jus"></td>
              <td className="cell col-2" data-person="Clara" data-category="Boisson" data-value="Limonade"></td>
              <td className="cell col-2" data-person="Clara" data-category="Boisson" data-value="Thé glacé"></td>
              <td className="cell col-3" data-person="Clara" data-category="Lot" data-value="Peluche"></td>
              <td className="cell col-3" data-person="Clara" data-category="Lot" data-value="Casquette"></td>
              <td className="cell col-3" data-person="Clara" data-category="Lot" data-value="Bonbon géant"></td>
              <td className="cell col-3" data-person="Clara" data-category="Lot" data-value="Porte-clés"></td>
            </tr>
            {/* David */}
            <tr className="block-1">
              <th className="rowLeft">David</th>
              <td className="cell col-1" data-person="David" data-category="Ballon" data-value="Rouge"></td>
              <td className="cell col-1" data-person="David" data-category="Ballon" data-value="Bleu"></td>
              <td className="cell col-1" data-person="David" data-category="Ballon" data-value="Vert"></td>
              <td className="cell col-1" data-person="David" data-category="Ballon" data-value="Jaune"></td>
              <td className="cell col-2" data-person="David" data-category="Boisson" data-value="Soda"></td>
              <td className="cell col-2" data-person="David" data-category="Boisson" data-value="Jus"></td>
              <td className="cell col-2" data-person="David" data-category="Boisson" data-value="Limonade"></td>
              <td className="cell col-2" data-person="David" data-category="Boisson" data-value="Thé glacé"></td>
              <td className="cell col-3" data-person="David" data-category="Lot" data-value="Peluche"></td>
              <td className="cell col-3" data-person="David" data-category="Lot" data-value="Casquette"></td>
              <td className="cell col-3" data-person="David" data-category="Lot" data-value="Bonbon géant"></td>
              <td className="cell col-3" data-person="David" data-category="Lot" data-value="Porte-clés"></td>
            </tr>

            {/* ===== Bloc 2 : LOT ===== */}
            <tr className="block-2">
              <th rowSpan={4} className="sideLabel groupLeft row-2">Lot</th>
              <th className="rowLeft">Peluche</th>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Peluche" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Peluche" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Peluche" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Peluche" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Peluche" data-topcat="Boisson" data-top="Soda"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Peluche" data-topcat="Boisson" data-top="Jus"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Peluche" data-topcat="Boisson" data-top="Limonade"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Peluche" data-topcat="Boisson" data-top="Thé glacé"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
            <tr className="block-2">
              <th className="rowLeft">Casquette</th>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Casquette" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Casquette" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Casquette" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Casquette" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Casquette" data-topcat="Boisson" data-top="Soda"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Casquette" data-topcat="Boisson" data-top="Jus"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Casquette" data-topcat="Boisson" data-top="Limonade"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Casquette" data-topcat="Boisson" data-top="Thé glacé"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
            <tr className="block-2">
              <th className="rowLeft">Bonbon géant</th>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Boisson" data-top="Soda"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Boisson" data-top="Jus"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Boisson" data-top="Limonade"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Bonbon géant" data-topcat="Boisson" data-top="Thé glacé"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
            <tr className="block-2">
              <th className="rowLeft">Porte-clés</th>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Lot|Ballon" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Boisson" data-top="Soda"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Boisson" data-top="Jus"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Boisson" data-top="Limonade"></td>
              <td className="cell col-2" data-pair="Lot|Boisson" data-leftcat="Lot" data-left="Porte-clés" data-topcat="Boisson" data-top="Thé glacé"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>

            {/* ===== Bloc 3 : BOISSON ===== */}
            <tr className="block-boisson">
              <th rowSpan={4} className="sideLabel groupLeft row-3">Boisson</th>
              <th className="rowLeft">Soda</th>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Soda" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Soda" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Soda" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Soda" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
            <tr className="block-boisson">
              <th className="rowLeft">Jus</th>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Jus" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Jus" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Jus" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Jus" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
            <tr className="block-boisson">
              <th className="rowLeft">Limonade</th>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Limonade" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Limonade" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Limonade" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Limonade" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
            <tr className="block-boisson">
              <th className="rowLeft">Thé glacé</th>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Thé glacé" data-topcat="Ballon" data-top="Rouge"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Thé glacé" data-topcat="Ballon" data-top="Bleu"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Thé glacé" data-topcat="Ballon" data-top="Vert"></td>
              <td className="cell col-1" data-pair="Boisson|Ballon" data-leftcat="Boisson" data-left="Thé glacé" data-topcat="Ballon" data-top="Jaune"></td>
              <td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td><td className="blank col-2"></td>
              <td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td><td className="blank col-3"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="controls" style={{ flexWrap: "wrap" }}>
        <button id="reset" className="btn" type="button">Effacer la grille</button>
        <button id="toggleCorrection" className="btn" type="button">Afficher la correction</button>
      </div>

      <table className="answers" id="recap">
        <thead>
          <tr><th>Participant</th><th>Ballon</th><th>Boisson</th><th>Lot</th></tr>
        </thead>
        <tbody>
          <tr data-person="Alice"><th>Alice</th><td className="r-ball"></td><td className="r-bois"></td><td className="r-lot"></td></tr>
          <tr data-person="Benoît"><th>Benoît</th><td className="r-ball"></td><td className="r-bois"></td><td className="r-lot"></td></tr>
          <tr data-person="Clara"><th>Clara</th><td className="r-ball"></td><td className="r-bois"></td><td className="r-lot"></td></tr>
          <tr data-person="David"><th>David</th><td className="r-ball"></td><td className="r-bois"></td><td className="r-lot"></td></tr>
        </tbody>
      </table>

      <table className="answers hidden" id="solution">
        <thead>
          <tr><th>Correction</th><th>Ballon</th><th>Boisson</th><th>Lot</th></tr>
        </thead>
        <tbody>
          <tr data-person="Alice"><th>Alice</th><td className="s-ball">—</td><td className="s-bois">—</td><td className="s-lot">—</td></tr>
          <tr data-person="Benoît"><th>Benoît</th><td className="s-ball">—</td><td className="s-bois">—</td><td className="s-lot">—</td></tr>
          <tr data-person="Clara"><th>Clara</th><td className="s-ball">—</td><td className="s-bois">—</td><td className="s-lot">—</td></tr>
          <tr data-person="David"><th>David</th><td className="s-ball">—</td><td className="s-bois">—</td><td className="s-lot">—</td></tr>
        </tbody>
      </table>

      {/* La solution reste fournie en JSON dans un <script> */}
      <script
        id="puzzle-solution"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            Alice: { Ballon: "Rouge", Boisson: "Jus", Lot: "Peluche" },
            "Benoît": { Ballon: "Bleu", Boisson: "Soda", Lot: "Casquette" },
            Clara: { Ballon: "Vert", Boisson: "Limonade", Lot: "Porte-clés" },
            David: { Ballon: "Jaune", Boisson: "Thé glacé", Lot: "Bonbon géant" },
          }),
        }}
      />
    </main>
  );
}