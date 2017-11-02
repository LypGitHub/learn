import { Frontend } from './xitu.interface'
import Person from './Xitu.Person.class'

export default class FrontendEngineer implements Frontend {
  baseSkill = [
    'html',
    'css',
    'javascript'
  ];

  getBaseSkill () {
    return this.baseSkill;
  }

  tryToPlay(thing) {
    const str = `I want to try something like ${thing}`
    console.log(str)
    return str
  }
}