# example



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

```javascript
/********* 使用 route 方式 分发路由  ***************
  ********** require('./route/home')(app) **********
  ********** require('./route/user')(app) **********
  **************************************************/

  /***************** 调用层级  *********************
  🚀🚀🚀🚀🚀🚀🚀 [ 1:router.js ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 2:controller] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 3: service  ] 🚀🚀🚀🚀🚀🚀🚀
  🚀🚀🚀🚀🚀🚀🚀 [ 4: model    ] 🚀🚀🚀🚀🚀🚀🚀
  *****************/
```
