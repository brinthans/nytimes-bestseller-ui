import axios from "axios";

const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json";
const apiKey = "hscZegcMAmX2GDeAr6iNfVUOrxbwCOEC";

export const getBestSeller = async () => {
  try {
    const {data} = await axios.get(`${url}?api-key=${apiKey}`);
    return data.results;
  } catch (error) {
    return error;
  }
}
