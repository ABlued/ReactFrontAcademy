const { createDOM } = require("./react");

const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {},
          children: ["첫 번째 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["두 번째 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["세 번째 아이템"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(vdom));
