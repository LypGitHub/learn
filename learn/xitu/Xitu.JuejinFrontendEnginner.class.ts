import FrontendEngineer from './Xitu.FrontendEngineer.class'

export default class JuejinFrontendEnginner extends FrontendEngineer {
  thingList: string[];
  constructor (person) {
    super(person)
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
    this.personSkill()
    this.thingList.forEach(this.tryToPlay.bind(this))
  }
}