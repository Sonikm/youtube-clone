const API_KEY = "AIzaSyD4Wjs1CCGRn0Vj7Z7Siz0FcMVhs34zLRw";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Soni Kumari",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
    replies: [
      {
        name: "Priya negi",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
        replies: [
          {
            name: "Ananya Kumari",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
            replies: [
              {
                name: "Pooja",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
                replies: [
                  {
                    name: "Soni Kumari",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
                    replies: []
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rani Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
    replies: [
      {
        name: "Soni Kumari",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
        replies: [
          {
            name: "Pooja",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
            replies: [
              {
                name: "Soni Kumari",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
                replies: []
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kajal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
    replies: [
      {
        name: "Naina",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
        replies: [
          {
            name: "Ananya Kumari",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
            replies: [
              {
                name: "Pooja",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
                replies: [
                  {
                    name: "Soni Kumari",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
                    replies: []
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akansha",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
    replies: [
      {
        name: "Rohit negi",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nostrum.",
        replies: []
      },
    ],
  },
];
