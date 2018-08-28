const PubSub = require('../helpers/pub_sub.js');

const Counter = function() {

}

Counter.prototype.countWords = function(sentence) {
  return sentence.length;
};

Counter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:sentence', (event)=>{
    const sentence = event.detail;
    const result = this.countWords(sentence);
    PubSub.publish('Counter:result', result);
  });
};
module.exports = Counter;
