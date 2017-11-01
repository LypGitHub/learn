
interface PersonProPerty {
  name: string;
  phone: string;
  graduate_institutions: string;
  graduation_time: string;
  work_experience: string;
  write_bug: boolean;
  interesting: boolean;
  email?: string;
  getName(): string;
  getPhone(): string;
  getGraduateInstitutions(): string;
  getGraduateTime(): string;
  getEmail(): string;
  getWorkExperience(): string;
  isInteresting(): boolean;
  canWriteBUG(): boolean;
}
class Person implements PersonProPerty{
  name: string;
  phone: string;
  graduate_institutions: string;
  graduation_time: string;
  email: string;
  work_experience: string;
  write_bug: boolean;
  interesting: boolean;
  constructor(person: PersonProPerty) { 

  }
  getName() { 
      return this.name;
  }
  getPhone() { 
      return this.phone;
  }
  getGraduateInstitutions() { 
      return this.graduate_institutions;
  }
  getGraduateTime() { 
      return this.graduation_time;
  }
  getEmail() { 
      return this.email || '无';
  }
  getWorkExperience() { 
      return this.work_experience;
  }
  isInteresting() { 
      return this.interesting;
  }
  canWriteBUG() { 
      return this.write_bug;
  }
}
interface Specification {
  skill: string;
  isSatisfiedBy(person: PersonProPerty);
  getSkill(): string;
};
class FrontendEngineer {

  goodJobInNativeJs () {
      return 
  }
  tryToPlay (thing) {
      return `I want to try something like ${thing}`
  }
}

class JuejinFrontendEnginnerSpecification implements Specification {
  skill: string;
  getSkill() { 
      return this.skill;
  }
  isSatisfiedBy (person) {
    return person.isInteresting() && person.canWriteBUG()
  }
}
class JuejinFrontendEnginner extends FrontendEngineer {
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

const my = new Person()
const juejinFrontendEnginnerSpecification = new JuejinFrontendEnginnerSpecification()

if (juejinFrontendEnginnerSpecification.isSatisfiedBy(my)) {
new JuejinFrontendEnginner(my).doSomeInterestingThings()
}
