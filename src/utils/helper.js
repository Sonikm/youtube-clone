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

export function formatViews(vc){
  let viewsCount = parseInt(vc);
  if(viewsCount < 1000) {
    return viewsCount;
  }
  else if(viewsCount >= 1000 && viewsCount < 10000) {
    return (viewsCount / 1000).toFixed(1) + "K";
  }
  else if(viewsCount >= 10000 && viewsCount < 1000000) {
    return (viewsCount / 1000).toFixed(0) + "K";
  }
  else if(viewsCount >= 1000000 && viewsCount < 10000000) {
    return (viewsCount / 1000000).toFixed(1) + "M";
  }
  else if(viewsCount >= 10000000) {
    return (viewsCount / 1000000).toFixed(0) + "M";
  }
}

// Function to format hashtags and URLs
export const formatText = (text) => {
  // Regex pattern to identify hashtags (#word)
  const hashtagRegex = /#\w+/g;
  // Regex pattern to identify URLs
  const urlRegex = /https?:\/\/\S+/g;
  // Regex pattern to identify video timing (00:00)
  const timeRegex = /\b\d{2}:\d{2}\b/g;

  return text.split('\n').map((line, index) => (
    <p key={index}>
      {line.split(' ').map((word, wordIndex) => {
        // Check if word is a hashtag
        if (word.match(hashtagRegex)) {
          return (
            <span key={wordIndex} className=" text-blue-600 cursor-pointer dark:text-[#3CA0F5]">{word} </span>
          );
        }
        // Check if word is a URL
        else if (word.match(urlRegex)) {
          return (
            <a key={wordIndex} href={word} className="text-blue-600 cursor-pointer dark:text-[#3CA0F5]" target="_blank" rel="noopener noreferrer">{word} </a>
          );
        }
        // Check if word is video timing
        else if (word.match(timeRegex)) {
          return (
            <span key={wordIndex} className="text-blue-600 cursor-pointer dark:text-[#3CA0F5]">{word} </span>
          );
        }
        // Otherwise, return the word as is
        else {
          return word + ' ';
        }
      })}
    </p>
  ));
};

export const formatNumberWithComma = (number) => {
  return parseInt(number).toLocaleString()  // Output: "7,249,829"
}
