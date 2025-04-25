const axios = require('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

fetchData(`${process.env.API_URL}/api/data`).then(data => {
  if (data.status === 200) {
    console.log("Data fetched successfully:", data.data);
  } else {
    console.error("Failed to fetch data", data.data.error_message);
  }
});
