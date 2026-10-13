const snacks = [
  { name: 'Trailmix', rank: 5 },
  { name: 'Dark chocolate', rank: 4 },
  { name: 'Nuts mixed Raisins', rank: 3 },
  { name: 'Crispy baked apple slices', rank: 2 },
  { name: 'Mixed fruits', rank: 1 },
];

export default function SnackList() {
  const rankedsnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      {rankedsnacks.map((snack) => (
        <div key={snack.name}>
          {' '}
          #{snack.rank} {snack.name}
        </div>
      ))}
    </div>
  );
}
