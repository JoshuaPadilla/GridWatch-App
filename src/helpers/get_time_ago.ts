export function getTimeAgo(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Define time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  // Logic to determine the correct unit
  if (seconds < intervals.minute) {
    return "just now";
  } else if (seconds < intervals.hour) {
    const count = Math.floor(seconds / intervals.minute);
    return `${count} minute${count > 1 ? "s" : ""} ago`;
  } else if (seconds < intervals.day) {
    const count = Math.floor(seconds / intervals.hour);
    return `${count} hour${count > 1 ? "s" : ""} ago`;
  } else if (seconds < intervals.week) {
    const count = Math.floor(seconds / intervals.day);
    return `${count} day${count > 1 ? "s" : ""} ago`;
  } else if (seconds < intervals.month) {
    const count = Math.floor(seconds / intervals.week);
    return `${count} week${count > 1 ? "s" : ""} ago`;
  } else if (seconds < intervals.year) {
    const count = Math.floor(seconds / intervals.month);
    return `${count} month${count > 1 ? "s" : ""} ago`;
  } else {
    const count = Math.floor(seconds / intervals.year);
    return `${count} year${count > 1 ? "s" : ""} ago`;
  }
}

// Usage:
// console.log(getTimeAgo("2025-12-13T14:55:34.000Z"));
// Output example: "5 days ago" (depending on current date)
