function createDOM(node) {
  if (typeof node === 'string') return document.createTextNode(node); // 문자열로 들어오면 문자열 그 자체를 넘겨준다.

  const element = document.createElement(node.tag);

  // children의 deps가 얼만큼 있는지 모르니 재귀함수로 children 있을때까지 호출한다.
  // 또한 실행 컨텍스트가 깨지지 않게 bind함수로 this를 element로 고정한다.
  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
}

const vdom = {
  tag: 'p',
  props: {},
  children: [
    {
      tag: 'h1',
      props: {},
      children: ['React 만들기'],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {},
          children: ['첫 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['두 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['세 번째 아이템'],
        },
      ],
    },
  ],
};

document.querySelector('#root').appendChild(createDOM(vdom));
