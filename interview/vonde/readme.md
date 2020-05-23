<div id="root">
    <span class="demo">
      This is a span.
    </span>
    <p>DOM</p>
  </div>

{
  tag: 'div',  /*标签*/
  attrs: {   /*标签上的所有属性 封装*/  
    id: 'root'
  },
  children: [ 
    {
      tag: 'span',
      attrs: {
        className: 'demo'
      },
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    },
    {
      tag: 'p',
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    }
  ]
}