import { useState } from "react";

function FilterableWorkTable({ works }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <WorkTable
        works={works}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function WorkCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function WorkRow({ work }) {
  const name = work.stocked ? (
    work.name
  ) : (
    <span style={{ color: "red" }}>{work.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{work.posti}</td>
    </tr>
  );
}

function WorkTable({ works, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  works.forEach((work) => {
    if (work.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !work.stocked) {
      return;
    }
    if (work.category !== lastCategory) {
      rows.push(
        <WorkCategoryRow category={work.category} key={work.category} />
      );
    }
    rows.push(<WorkRow work={work} key={work.name} />);
    lastCategory = work.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Posti</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show works in stock
      </label>
    </form>
  );
}

const WORKS = [
  { category: "AFC", posti: "1", stokced: true, name: "Informatico" },
  {
    category: "AFC",
    posti: "1",
    stocked: true,
    name: "Informatico degli edifici",
  },
  {
    category: "AFC",
    posti: "2",
    stocked: true,
    name: "Allestitore di prodotti stampati",
  },
  {
    category: "AFC",
    posti: "2",
    stocked: false,
    name: "Operatore informatico",
  },
  { category: "CFP", posti: "2", stocked: true, name: "Addetto alimentarista" },
  {
    category: "CFP",
    posti: "4",
    stocked: false,
    name: "Addetto alla costruzione di binari",
  },
  {
    category: "CFP",
    posti: "1",
    stocked: true,
    name: "Addetto alla copertura di tetti",
  },
  {
    category: "CFP",
    posti: "4",
    stocked: true,
    name: "Addetto ai lavori di lattoneria",
  },
  {
    category: "CFP",
    posti: "1",
    stocked: false,
    name: "Addetto alla cucitura",
  },
];

export default function App() {
  return <FilterableWorkTable works={WORKS} />;
}
