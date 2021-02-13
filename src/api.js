const base_url = 'https://newsapi.org/v2/';

export const latestNews = `${base_url}top-headlines?language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const latesIndiaNews = `${base_url}top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const buisnessNews = `${base_url}top-headlines?category=business&language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const sportsNews = `${base_url}top-headlines?category=sports&language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const entertainmentNews = `${base_url}top-headlines?category=entertainment&language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const healthNews = `${base_url}top-headlines?category=health&language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const technologyNews = `${base_url}top-headlines?category=technology&language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`
export const scienceNews = `${base_url}top-headlines?category=science&language=en&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=15`