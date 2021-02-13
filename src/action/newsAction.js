import axios from "axios";
import {latestNews , latesIndiaNews , buisnessNews , sportsNews , scienceNews , technologyNews , healthNews , entertainmentNews} from '../api'

export const getNews = () => async (dispatch) => {
    const latest = await axios.get(latestNews);
    const indiaLatest = await axios.get(latesIndiaNews);
    const buisness = await axios.get(buisnessNews);
    const sports = await axios.get(sportsNews);
    const science = await axios.get(scienceNews);
    const technology = await axios.get(technologyNews);
    const health = await axios.get(healthNews);
    const entertainment = await axios.get(entertainmentNews);

    dispatch({
        type : 'FETCH_NEWS',
        payload : {
            trending : latest.articles,
            trendingIndia : indiaLatest.articles,
            buisnessNews : buisness.articles,
            sportsNews : sports.articles,
            scienceNews : science.articles,
            technologyNews : technology.articles,
            healthNews : health.articles,
            entertainmentNews : entertainment.articles
        }
    })
}