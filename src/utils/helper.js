export const fetchData = async (API_URL) => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const formatPublishedVideo = (publishedAt) => {
  // Original time
  var originalTime = new Date(publishedAt);

  // Current time
  var currentTime = new Date();

  // Calculate the time difference in milliseconds
  var timeDifference = currentTime - originalTime;

  // Convert milliseconds to years, weeks, days, hours, and minutes
  var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  var weeks = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 7)
  );
  var months = Math.floor(weeks / 4);
  weeks %= 4;
  var days = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Construct the duration string
  var durationString = "";

  if (years > 0) {
    durationString += years + " year" + (years > 1 ? "s" : "") + " ";
  }
  if (months > 0) {
    durationString += months + " month" + (months > 1 ? "s" : "") + " ";
  } else if (weeks > 0) {
    durationString += weeks + " week" + (weeks > 1 ? "s" : "") + " ";
  } else if (days > 0) {
    durationString += days + " day" + (days > 1 ? "s" : "") + " ";
  } else if (hours > 0) {
    durationString += hours + " hour" + (hours > 1 ? "s" : "") + " ";
  } else if (minutes > 0) {
    durationString += minutes + " minute" + (minutes > 1 ? "s" : "") + " ";
  } else {
    durationString = "Just now";
  }

  durationString += "ago";

  return durationString;
};

