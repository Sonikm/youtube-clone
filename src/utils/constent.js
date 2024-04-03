//* Video key
// export const API_KEY = "AIzaSyDWn_ifb4DlDtIhTZDtL9m_Y0EEdvEI9pM";
export const API_KEY = "AIzaSyCX55kqbiFuiohqzwCsHVmuKgrvt--5juo";
// export const API_KEY = "AIzaSyB3_o_wwmXTVhsEgP_2Uu7DreU4Rm7B8XU";
// export const videoCategory_api = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=100`;
export const CATEGORIES_DATA_API = `https://www.googleapis.com/youtube/v3/videoCategories?key=${API_KEY}&regionCode=IN`;

//* Random user api
export const RANDOMUSER = "https://randomuser.me/api/";

//* Search video list api
export const SEARCH_VIDEO_LIST_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${API_KEY}&q=`;

//* Youtube main video list
export const YT_VIDEO_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=5&chart=mostPopular&regionCode=IN&key=" +
  API_KEY;

//* Youtube category api
export const VIDEO_CATEGORIES_API = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${API_KEY}`;

//* Suggestions query api
export const SEARCH_AUTO_COMPLETE_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//* Video like, views, comments data
export const VIDEO_VIEWS_LIKE_COMMENTS_DATA = `https://www.googleapis.com/youtube/v3/videos?part=statistics&key=${API_KEY}&id=`;

//* Subscribe count
export const SUBSCRIBE_COUNT = `https://www.googleapis.com/youtube/v3/channels?part=statistics&key=${API_KEY}&id=`;

//* User profile image api
export const VIDEO_USER_PROFILE_PHOTO = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&key=${API_KEY}&id=`;

//* play video card data
export const VIDEO_CARD_DATA = `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=`;

//* Video comments data
export const VIDEO_COMMENTS = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`;
//https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&allThreadsRelatedToChannelId=UCvrhwpnp2DHYQ1CbXby9ypQ&key=AIzaSyD7sZPHCDxgctQIR75KTO2JsN4ba6fMuEM

//https://www.googleapis.com/youtube/v3/channels?id=UC_pmwSxVDPmD_XzxrG-zgqg&key=AIzaSyD7sZPHCDxgctQIR75KTO2JsN4ba6fMuEM&part=contentDetails
//https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UU_pmwSxVDPmD_XzxrG-zgqg&key=AIzaSyD7sZPHCDxgctQIR75KTO2JsN4ba6fMuEM&part=snippet&maxResults=50

// export const SEARCH_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=hindi`;
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&q=hindi
//https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyD7sZPHCDxgctQIR75KTO2JsN4ba6fMuEM&textFormat=plainText&part=snippet&videoId=Hup0XqyfuDU&maxResults=100
//https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&channelId=UC2bNrKQbJLphxNCd6BSnTkA&part=snippet,id&order=date&maxResults=20
//https://stackoverflow.com/questions/18953499/youtube-api-to-fetch-all-videos-on-a-channel
//https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs

// view and like count api => https://www.googleapis.com/youtube/v3/videos?part=statistics&id=dNM0CPtZJoA&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs
// subscribe count ==> https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC68nKdrLbLL0Vj7ilVkLmmg&key=AIzaSyD7sZPHCDxgctQIR75KTO2JsN4ba6fMuEM
//https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs

export const buttonList = [
  "All",
  "Music",
  "Programming",
  "Dance",
  "Comedy",
  "Coding",
  "Mixes",
  "Live",
  "Computer",
  "Sales",
  "Recently uploaded",
  "React",
  "Movies",
  "Story",
  "Blogs",
  "Weddings",
];
