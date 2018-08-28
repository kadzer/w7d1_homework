const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    event.preventDefault();
    const sentence = event.target.text.value;
    PubSub.publish('InputView:sentence', sentence);
  })
};

module.exports = InputView;
