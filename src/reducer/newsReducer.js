const initialState = {
    trending : [],
    trendingIndia : [],
    buisnessNews : [],
    sportsNews : [],
    scienceNews : [],
    technologyNews : [],
    healthNews : [],
    entertainmentNews : []
}

const newsReducer = (state = initialState , action) => {
    switch(action.type){
        case "FETCH_NEWS" : 
            return {...state , trending : action.payload.trending, trendingIndia : action.payload.trendingIndia , buisnessNews : action.payload.buisnessNews , sportsNews : action.payload.sportsNews , scienceNews : action.payload.scienceNews , technologyNews : action.payload.technologyNews , healthNews : action.payload.healthNews , entertainmentNews : action.payload.entertainmentNews }
        default : 
            return { ...state}
    }
}

export default newsReducer
