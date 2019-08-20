const Controller = require('egg').Controller;

class PostsController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = 'index';
  }

  async create() {
    const ctx = this.ctx;
    // console.info('ctx.params', ctx.params)
    // console.info('ctx.request.body', ctx.request.body)
    // console.info('ctx.query', ctx.query);
    ctx.body = `[create] response: your request body is ${JSON.stringify(ctx.request.body)}`;
  }

  async show() {
    const ctx = this.ctx;
    // console.info('ctx.params', ctx.params)
    // console.info('ctx.request.body', ctx.request.body)
    // console.info('ctx.query', ctx.query);
    ctx.body = `[show] response: your request parameters is ${JSON.stringify(ctx.params)}`;
  }

  async edit() {
    const ctx = this.ctx;
    // console.info('ctx.params', ctx.params)
    // console.info('ctx.request.body', ctx.request.body)
    // console.info('ctx.query', ctx.query);
    ctx.body = `[edit] response: your request parameters is ${JSON.stringify(ctx.params)}`;
  }

  async update() {
    const ctx = this.ctx;
    // console.info('ctx.params', ctx.params)
    // console.info('ctx.request.body', ctx.request.body)
    // console.info('ctx.query', ctx.query);
    ctx.body = `[update] response: your request parameters is ${JSON.stringify(ctx.params)}`;
  }

  async destroy() {
    const ctx = this.ctx;
    // console.info('ctx.params', ctx.params)
    // console.info('ctx.request.body', ctx.request.body)
    console.info('ctx.query', ctx.query);
    ctx.body = `[destroy] response: your request parameters is ${JSON.stringify(ctx.params)}`;
  }


  /**
   * request source:
      url: '/posts/new?gender=male',
      params: { name: 'leslie' } 🚗🚗🚗
   */
  async new() {
    const ctx = this.ctx;
    // console.info('ctx.params', ctx.params)
    // console.info('ctx.request.body', ctx.request.body)
    console.info('ctx.query', ctx.query); // ctx.query { gender: 'male', name: 'leslie' } 🚗🚗🚗
    ctx.body = `[new] response:ctx.query: ${JSON.stringify(ctx.query)}`;
  }

}
module.exports = PostsController;

/**
 * Method	      Path	            Route Name	      Controller.Action
    GET	        /posts	          posts	            app.controllers.posts.index
    GET	        /posts/new	      new_post	        app.controllers.posts.new
    POST	      /posts	          posts	            app.controllers.posts.create
    GET	        /posts/:id	      post	            app.controllers.posts.show
    GET	        /posts/:id/edit	  edit_post	        app.controllers.posts.edit
    PUT	        /posts/:id	      post	            app.controllers.posts.update
    DELETE	    /posts/:id	      post	            app.controllers.posts.destroy
 */