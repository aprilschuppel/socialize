
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

export function formatDateWithDaysSince(date: Date, showDays: boolean = true): string {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return showDays ? `${diffDays} days ago` : formattedDate;
}

export function calculateAge(birthDate: Date, showDate: boolean = true): string | number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  };

  const formattedDate = birthDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return showDate ? `${formattedDate} (${age} years old)` : age;
}
