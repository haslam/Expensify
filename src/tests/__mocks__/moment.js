//This is a mock of the momentjs library. jest calls this mock whenever it needs to access moment.
//- this allows for date correletion.
//use the requireActuall to require the actuall moment library.
const moment = require.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
}