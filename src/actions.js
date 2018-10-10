const SET_COMPLAINT = 'SET_COMPLAINT';
const setComplaint = (complaint) => {
  return ({
  type: SET_COMPLAINT,
  trackingNo: complaint.trackingNo,
  issue: complaint.issue,
  details: complaint.details,
  })
}

export const makeRequest = (values) => dispatch => {
  console.log(values);
  fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
    method: 'POST',
    headers:  {"Content-Type": "application/json; charset=utf-8"},
    body: JSON.stringify(values), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
};