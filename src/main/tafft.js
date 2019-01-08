function formatTime(timeConfig, timeValue) {
  let I = [ timeConfig, timeValue ]
  let O = []
  let i = 0

  while ((O[i] ? ++O[i] : (O[i] = 1)) && (O[i] < I[0][i]) ? (i = 0, --I[1]) : !(O[i++] = 0)) { }

  return O
}

function Oneliner(expr) {
  return (...input) => {
    const output = [];
    while(expr(input, output)) { }
    return output;
  }
}

const FormatTime = OneLiner((I, O) =>
  return (O[I.i] ? ++O[I.i] : (O[I.i] = 1)) && (O[I.i] < I[0][i]) ? (i = 0, --I[1]) : !(O[i++] = 0)
}

const [ secs, mins, hrs, days ] = formatTime([60, 60, 24, Infinity], process.argv[2] || 0)

console.log(`${secs || 0}secs ${mins || 0}mins ${hrs || 0}hrs ${days || 0}days` )

