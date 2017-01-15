// GET /api/v1/players/:id/skills
export const PDF_REQUEST = 'PDF_REQUEST';
export const PDF_SUCCESS = 'PDF_SUCCESS';
export const PDF_FAILURE = 'PDF_FAILURE';

export function fetchPdf(path) {
  return (dispatch, getState) => {
    dispatch({
      API_CALL: {
        endpoint: path+'&locale='+getState().lexics.lang, //`http://beta.instatscout.com/matches/match_info_report?match_id=${matchId}&locale=en`,
        method: 'GET',
        types: [PDF_REQUEST, PDF_SUCCESS, PDF_FAILURE]
      }
    })
  }
};