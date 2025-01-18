export function getInitials(name: string) {
  const names = name.split(" ");
  let initials = "";

  for (const name of names) {
    if (name.length > 0) {
      initials += name[0].toUpperCase();
    }
  }

  return initials;
}

export function formatDateWithDaysSince(date: Date): string {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return `${formattedDate} (${diffDays} days ago)`;
}

const date = new Date("2023-12-25");
console.log(formatDateWithDaysSince(date)); // Output: December 25, 2023 (33 days ago)