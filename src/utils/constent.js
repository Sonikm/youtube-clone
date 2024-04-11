//* Video key
// export const API_KEY = "AIzaSyDWn_ifb4DlDtIhTZDtL9m_Y0EEdvEI9pM";
// const API_KEY = "AIzaSyD4Wjs1CCGRn0Vj7Z7Siz0FcMVhs34zLRw";
// export const API_KEY = "AIzaSyDWn_ifb4DlDtIhTZDtL9m_Y0EEdvEI9pM";
// export const API_KEY = "AIzaSyD7sZPHCDxgctQIR75KTO2JsN4ba6fMuEM";
// export const API_KEY = "AIzaSyCX55kqbiFuiohqzwCsHVmuKgrvt--5juo";
// export const API_KEY = "AIzaSyB3_o_wwmXTVhsEgP_2Uu7DreU4Rm7B8XU";
// export const API_KEY = "AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs";
// export const API_KEY = "AIzaSyDR0BODtKuDfovbvB4Pt5PQt_Sp9b3WuF4";
// export const API_KEY = "AIzaSyBHhc1J_vCgN9lZAlGJFxBJJAPC7x8wLsc";
// export const API_KEY = "AIzaSyArEyZc2xGw6GE2IwII6KVOnsaHsA8weVw";
// export const API_KEY = "AIzaSyDgDHmW-AxSZbIjaiJdaMVRH8xNa5HAwfE";
export const API_KEY = "AIzaSyAlPpNE1JErMhgxfdP2GSRatUsLWCJgnAE";
// export const videoCategory_api = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=100`;
export const CATEGORIES_DATA_API = `https://www.googleapis.com/youtube/v3/videoCategories?key=${API_KEY}&regionCode=IN`;

//* Random user api
export const RANDOMUSER = "https://randomuser.me/api/";

//* Search video list api
export const SEARCH_VIDEO_LIST_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${API_KEY}&q=`;

//* Youtube main video list
export const YT_VIDEO_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
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

//* Channel video and banner

// export const CHANNEL_VIEW_BANNER = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&key=${API_KEY}&id=UCebC4x5l2-PQxg46Ucv9CsA`
export const CHANNEL_INFO = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,snippet,statistics&key=${API_KEY}&id=UCebC4x5l2-PQxg46Ucv9CsA`

//* Channel video
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDg7RCJbZ5fk51Da1ROAhTjm1KWD8LGyqs&channelId=UC2bNrKQbJLphxNCd6BSnTkA&part=snippet,id&order=date&maxResults=20

