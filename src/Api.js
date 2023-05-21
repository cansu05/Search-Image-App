import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID mgmwNIawggHIl_Eaw-EKwcuZpTcJ7qOE1SHzY41A8g8",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
