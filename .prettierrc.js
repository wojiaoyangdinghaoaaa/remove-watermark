/**
 * prettier配置
 * 官方文档：https://prettier.io/docs/en/options.html
 **/
module.exports = {
    "tabWidth": 2,                   // 一个tab代表几个空格数，默认为2
    "useTabs": false,                // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
    "singleQuote": true,             // //字符串是否使用单引号，默认为false，使用双引号
    "printWidth": 120,               // 换行字符串阈值，默认为80
    "semi": true,                    // 句末加分号，默认为true
    "trailingComma": 'none',         // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    "bracketSpacing": false,          // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    "jsxBracketSameLine": false,     // jsx > 是否另起一行
    "arrowParens": 'avoid',          // (x) => {} 是否要有小括号
    "requirePragma": true,           // 是否要注释来决定是否格式化代码
    "proseWrap": 'preserve',         // 是否要换行
    "parser": "babel"                // 代码的解析引擎，与babel相同。
  }
  