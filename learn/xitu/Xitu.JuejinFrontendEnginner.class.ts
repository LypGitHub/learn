import FrontendEngineer from './Xitu.FrontendEngineer.class'

export default class JuejinFrontendEnginner extends FrontendEngineer {
  thingList: string[];
  constructor (person) {
    super()
    this.thingList = [
      'ES6+',
      'Node.js v8+',
      'Vue.js v2.4+',
      'SSR',
      'Chrome (Extension|Headless)',
      'Weixin',
      'Docker',
      'rm -rf /',
      'escape'
    ]
  }
  doSomeInterestingThings () {
    this.thingList.forEach(this.tryToPlay.bind(this))
  }
}