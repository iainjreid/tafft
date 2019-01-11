// Multiline IMPL
function formatTime(timeConfig, timeValue) {
  let I = [ timeConfig, timeValue ]
  let O = []
  let i = 0

  while ((O[i] ? ++O[i] : (O[i] = 1)) && (O[i] < I[0][i]) ? (i = 0, --I[1]) : !(O[i++] = 0)) { }

  return O
}

const F = (f) => (...x) => {
  const y = []; while(f(x, y)) { }; return y;
}

const F2 = (f) => (...x) => {
  const y = []; f(x, y); return y;
}

// One line IMPL
const FormatTime = F((I, O) => (O[I.i || (I.i = 0)] ? ++O[I.i] : (O[I.i] = 1)) && (O[I.i] < I[0][I.i]) ? (I.i = 0, --I[1]) : !(O[I.i++] = 0))

const F2FormatTime = F2((I, O, i = 0) => { while ((O[i || i] ? ++O[i] : (O[i] = 1)) && (O[i] < I[0][i]) ? (I.i = 0, --I[1]) : !(O[i++] = 0)) { } })
// Exec
// const [ secs, mins, hrs, days ] = FormatTime([60, 60, 24, Infinity], process.argv[2] || 1)
// console.log(`${secs || 0}secs ${mins || 0}mins ${hrs || 0}hrs ${days || 0}days` )

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite.add('oneliner', function() {
  FormatTime([60, 60, 24, Infinity], process.argv[2] || 1)
})
.add('multiliner', function() {
  formatTime([60, 60, 24, Infinity], process.argv[2] || 1)
})
.add('hybrid', function() {
  F2FormatTime([60, 60, 24, Infinity], process.argv[2] || 1)
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
