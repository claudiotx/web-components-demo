# Angular Support
Angular, Protractor, Forms, PWA, Augury, Language Services, Router, Elements, CDK, Universal, Karma, Labs, Compiler, i18n, HTTP, Material, Animations, CLI

## Web Components
Framework Independent Components (via Custom Elements)
Angular Elements

* Re-use with other technologies
* Dynamically Add within the Framework (Size: 7.7 KB)
* Lazy Load (Size: 7.7 KB)

This is like a Micro-Frontend
* External Elements - full isolation other frameworks *not officially supported (Size: 400 KB ) *`ngx add ngx-build-plus`
  * Ivy for UI-Based Code
  * Sharing dependencies

## Applications
- Component Libraries
- Dynamic Libraries
- Upgrading Frameworks

## Angular Elements
1. Wrap and Expose an Angular Component
`createCustomElement()`

2. Browser API
`customElements.define('')`

Done!

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

`--single bundle`

## Bundle Sizes
Libraries: Angular, Rxjs, ... on each Custom Element.

Ivy will be capable of cutting the size down.

Ivy integration for components Angular 8.0 +.

Ivy works better for UI Based Widgets.

Sharing Libraries -> `ngx-build-plus`



# Demo 1
Based on GDE Mr. Manfred Steyer
https://www.softwarearchitekt.at/post/2018/07/13/angular-elements-part-i-a-dynamic-dashboard-in-four-steps-with-web-components.aspx

## Steps
`ng new my-web-component`
`npm i @angular/elements --save`
Update polyfills.ts and angular.json.
Go to your `component.ts`
Remove the selector as the Custom Element will get one.
Go to your `app.module.ts`
Add the component to: `entryComponents:[]`
Add the code to createCustomElement().
Add the build script to `package.json`

OK
Copy the CE `dist/main.js` to your host `assets/custom-element1.js` folder.
