TypeScript React Grid Layout with Components Demo
==================================================

关键点：如果Layout内部针对一些Component进行布局，那么需要在外面套一个`<div>`，
并加上对应的`key='?'`，此处的key与layouts中的`{i:'?'}`对应。

如果没有这个`div`，则无法正确的进行布局。

```
npm install
npm run demo
```

It will open page on browser automatically.
