const InputView = require('./views/input_view.js');
const Counter = require('./models/counter.js');
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView;
  inputView.bindEvents();
  console.log("JS loaded");

  const counter = new Counter();
  counter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
