export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOWPLAYING_MOVIESLIST =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIESLIST =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOPRATED_MOVIESLIST =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIESLIST =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const PLAY_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEX7vUduNbSs2RMulFjUMNDFjMGOQyvobTQ&s";

export const TRAILER_URL = "https://api.themoviedb.org/3/movie/";

export const YOUTUBE_TRAILERVIDEO = "https://www.youtube.com/embed/";

export const MOVIE_POSTER = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
