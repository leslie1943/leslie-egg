class AppBootHook {
  constructor(app) {
    console.info('AppBootHook constructor....')
    this.app = app
    // console.info('this.app', this.app)
    // console.info('this.app.config', this.app.config)
  }
}

module.exports = AppBootHook