export default function calculateTotalRetirementEarnings(age) {
  return Object.values(age).reduce(
    (acc, curr) => (curr && !isNaN(curr) ? acc + curr : acc),
    0
  );
}
