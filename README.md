# Angular Support
Angular, Protractor, Forms, PWA, Augury, Language Services, Router, Elements, CDK, Universal, Karma, Labs, Compiler, i18n, HTTP, Material, Animations, CLI

## Web Components
Framework Independent Components (via Custom Elements)
Angular Elements

## Applications
- Component Libraries
- Dynamic Libraries
- Upgrading Frameworks

## Angular Elements
Wrapping Angular components
`createCustomElement()`

Browser API
`customElements.define('')`

Usual way of creating elements
`const h1 = document.createElement('h1');`
```
  const xpto = document.createElement('xpto');
  xpto['name'] = 'hello';
  xpto.addEventListener(...);
  xpto.setAttribute(...);
```
## Lazy Loading

## External Elements
Project A ['Custom Element', 'Custom Element 2', 'Custom Element 3']   >> Bundle

Project B --- Bundle['Custom Element']
          --- Bundle['Custom Element 2']

https://www.youtube.com/watch?v=E9i3YBFxSSE