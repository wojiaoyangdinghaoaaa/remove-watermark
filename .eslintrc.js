module.exports = {
    "parser": "babel-eslint",
    "extends": [
      "taro",
      "prettier"
    ],
    "rules": {
      "no-unused-vars": ["error", {"varsIgnorePattern": "Taro"}],
      "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx", ".tsx"]}],
      "class-methods-use-this": "off",
      "prefer-rest-params": "off",
      "arrow-body-style": "warn",
      "taro/custom-component-children": "off",
      "import/first": false,
      "react/sort-comp": false,
      "import/prefer-default-export": false,
  
      // 分号结尾
      "semi": 2,
      // 缩进
      "indent": [2, 2, { "SwitchCase": 1, "ObjectExpression": 1 }],
      // 对象冒号前后空格
      "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
      // 逗号前后空格
      "comma-spacing": [2, { "before": false, "after": true }],
      // 注释空格
      "spaced-comment": [2, "always"],
      // 对象大括号内空格
      "object-curly-spacing": [2, "never"],
      // 使用单引号
      "quotes": [2, "single"],
      // 不允许多余空格
      "no-multi-spaces": 1,
      // 未使用定义变量
      "no-unused-vars": 1,
      "no-console": 0,
      "no-var": 2,
      // 块前必须有空格
      "space-before-blocks": 2,
      // 在JSX属性中强制一致地使用双引号
      "jsx-quotes": [2, "prefer-double"],
      // prop-types检验
      "react/prop-types": 0,
      //验证JSX中的props缩进
      "react/jsx-indent-props": [2, 2],
      // 防止React组件定义中缺少displayName
      "react/display-name": 0,
      // 防止使用字符串引用
      "react/no-string-refs": 0,
      // 防止使用不推荐的方法，包括组件生命周期方法
      "react/no-deprecated": 1,
    }
  };
  