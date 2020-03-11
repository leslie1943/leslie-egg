/* eslint-disable */

function objectId() {
  return new Date().getTime().toString()
    .substring(0, 12);
}

module.exports = {
  objectId,
};
