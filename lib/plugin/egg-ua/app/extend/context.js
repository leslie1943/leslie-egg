'use strict'

module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipod|ipod/i
    return iosReg.test(this.get('user-agent'))
  }
}