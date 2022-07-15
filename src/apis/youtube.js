import axios from "axios";

const KEY = "AIzaSyAnzB7ElAf5Iaal_RdonqAC7MrsvSzIYtI";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});

