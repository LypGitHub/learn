import { Specification, PersonProperty } from './xitu.interface'
import Person from './Xitu.Person.class'
import JuejinFrontendEnginnerSpecification from './Xitu.JuejinFrontendEnginnerSpecification.class'
import JuejinFrontendEnginner from './Xitu.JuejinFrontendEnginner.class'

let myProp = <PersonProperty>{}

myProp.name = '李毅鹏'
myProp.phone = '135159365145'
myProp.graduate_institutions = '三明学院'
myProp.graduation_time = '2016-06'
myProp.work_experience = `

`
myProp.write_bug = true
myProp.interesting = true
myProp.email = '657993703@qq.com'
myProp.skill = [
  'Node v8+',
  'React v15+',
  'Vue v2.4+',
  'ES6+',
  'React Native',
  'Less/Scss/...',
  'emmmmmmm and so on'
]

const my = new Person(myProp)

const juejinFrontendEnginnerSpecification = new JuejinFrontendEnginnerSpecification()

if (juejinFrontendEnginnerSpecification.isSatisfiedBy(my)) {
  new JuejinFrontendEnginner(my).doSomeInterestingThings()
}
