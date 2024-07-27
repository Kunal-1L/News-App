const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/fetchData", async (req, res) => {
  const { input_city, input_from_date, input_to_date } = req.query;

  if (!input_city || !input_from_date || !input_to_date) {
    return res.status(400).json({ error: "Missing required query parameters" });
  }

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: input_city,
        from: input_from_date,
        to: input_to_date,
        sortBy: "popularity",
        apiKey: "bf928267ab0a45d7b3b9b018d5dbdf6b",
      },
    });

    const apiData = response.data.articles;

    const processedData = apiData
  .filter(item => item.source.name !== '[Removed]')
  .map(item => ({
    source: item.source.name,
    description: item.description,
    title: item.title,
    url: item.url,
    image: item.urlToImage === null 
      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&s' 
      : item.urlToImage,
  }));


    res.json({
      message: "Data fetched and processed successfully!",
      data: processedData,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
