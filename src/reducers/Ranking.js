// レスポンスからランキング情報だけを抜き出す
const getRanking = response => {
  const ranking = [];
  const itemLength = response.ResultSet.totalResultsReturned;
  for (let index = 0; index < itemLength; index++) {
    const item = response.ResultSet['0'].Result[index + ''];
    ranking.push({
      code: item.Code,
      name: item.Name,
      url: item.Url,
      imageUrl: item.Image.Medium,
    });
  }
  return ranking;
};

// 初期状態
const initialState = {
  category: undefined,
  ranking: undefined,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        category: action.payload.category,
        ranking: undefined,
        error: false,
      };

    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
          ...state,
          ranking: getRanking(action.payload.response),
        };

    default:
      return state;
  }
};
