import job from "../job/sidebar";

export default [
  // {
  //   text: "周录记",
  //   link: "/magazine/weekly2023",
  // },
  {
    text: "前端学习",
    items: [
      {
        text: "基础",
        items: [
          { text: "HTML / CSS", link: "/fe/css/css" },
          { text: "JavaScript", link: "/fe/js/what_is_js" },
        ],
      },
      {
        text: "框架",
        items: [
          { text: "Vue", link: "/fe/vue/vue_core_basis" },
          // { text: "React", link: "/fe/react/react_basis" },
        ],
      },
      {
        text: "打包工具",
        items: [
          { text: "webpack 基本指令", link: "/fe/webpack/webpack-basis-order" },
          { text: "有道翻译", link: "https://fanyi.youdao.com/index.html#/" },
        ],
      },
      // {
      //   text: "其它",
      //   items: [
      //     { text: "Nodejs", link: "/fe/nodejs/node_basis" },
      //     { text: "Git", link: "/fe/git/git" },
      //     { text: "Webpack", link: "/fe/webpack/webpack_basis" },
      //     { text: "Vscode", link: "/fe/ide/vscode" },
      //   ],
      // },
      // {
      //   text: "项目",
      //   items: [
      //     { text: "COVID-19", link: "/projects/covid19/headline" },
      //     { text: "Echarts", link: "/projects/echarts/headline" },
      //   ],
      // },
    ],
  },
  {
    text: "计算机基础",
    link: "/cs/network",
  },
  // {
  //   text: "资源集中营",
  //   link: "/resources/navigation/nav",
  // },

  // {
  //   text: "知也无涯",
  //   items: [{ text: "Python", link: "/lang/python/crawler" }],
  // },
  // {
  //   text: "工作总结",
  //   items: [
  //     {
  //       text: "uni-app",
  //       items: [
  //         { text: "微信支付", link: "/job/uni-app/css" },
  //         { text: "支付宝支付", link: "/fe/js/what_is_js" },
  //       ],
  //     },
  //     {
  //       text: "框架",
  //       items: [
  //         { text: "Vue", link: "/fe/vue/vue_core_basis" },
  //         // { text: "React", link: "/fe/react/react_basis" },
  //       ],
  //     },
  //     {
  //       text: "打包工具",
  //       items: [
  //         { text: "webpack 基本指令", link: "/fe/webpack/webpack-basis-order" },
  //         { text: "有道翻译", link: "https://fanyi.youdao.com/index.html#/" },
  //       ],
  //     },
  //   ],
  // },
  {
    text: "工作总结",
    items: [...job],
  },
];
