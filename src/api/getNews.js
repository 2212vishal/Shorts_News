export const getNews = async (country, category, page, pageSize) => {
  try {
    const NEWS_API_key='2643ffe45c7b47958069a33c3a9e8d1c';
    const url_key = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
      NEWS_API_key
    }&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url_key);
    let finalData = await data.json();
    // console.log(finalData);
    return {
      articles: finalData?.articles,
      totalResults: finalData?.totalResults,
    };
  } catch (error) {
    console.log(error);
  }
};
