const fs = require("fs");

const normal =  {
  "│": "│",
  "├": "├",
  "└": "└",
  "─": "─"
}

const soft =  {
  "│": "│",
  "├": "├",
  "└": "╰",
  "─": "─"
}

const double =  {
  "│": "║",
  "├": "╠",
  "└": "╚",
  "─": "═"
}

const mixed =  {
  "│": "│",
  "├": "╞",
  "└": "╘",
  "─": "═"
}

console.log(tree(process.argv[2], soft, true));

function tree(dir, charMap, under, prefix = "") {
  const ls = fs.readdirSync(dir)
  let output = ""

  ls.filter(_ => !_.startsWith(".")).forEach((item ,i) =>  {
    if (fs.statSync(`${dir}/${item}`).isDirectory()) {
      output += ` \n${prefix}${i === ls.length - 1 ? charMap["└"] : charMap["├"]}${charMap["─"]}${charMap["─"]} ${item}/`;
      output += tree(`${dir}/${item}`, charMap, under, `${prefix}${i === ls.length - 1 ? " " : charMap["│"]}   `);
    }
    else {
      output += `\n${prefix}${i === ls.length - 1 ? charMap["└"] : charMap["├"]}${charMap["─"]}${charMap["─"]} ${item}`;
    }
  });

  return output;
}
