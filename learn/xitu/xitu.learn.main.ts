import { Specification, PersonProperty, Data } from './xitu.interface'
import Person from './Xitu.Person.class'
import JuejinFrontendEnginnerSpecification from './Xitu.JuejinFrontendEnginnerSpecification.class'
import JuejinFrontendEnginner from './Xitu.JuejinFrontendEnginner.class'
import ConsoleUtil from './Xitu.Console.util'

const consoleUtil = new ConsoleUtil()
let myProp = <PersonProperty>{}

myProp.name = '李毅鹏'
myProp.phone = '135159365145'
myProp.graduate_institutions = '三明学院'
myProp.graduation_time = '2016-06'
myProp.work_experience = `
    1. 不知道写什么。。。。。
    2. 不知道写什么。。。。。
    3. 不知道写什么。。。。。
    4. 不知道写什么。。。。。
`
myProp.write_bug = true 
myProp.interesting = [
  'Javasript',
  'Css3',
  'React v16+',
  'PWA',
  'GraphQL',
  'Java',
  'Docker',
  'Deep Learning',
  'AI',
  '...'
]
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
myProp.github = 'https://github.com/LypGitHub'

const my = new Person(myProp)

const juejinFrontendEnginnerSpecification = new JuejinFrontendEnginnerSpecification()

if (juejinFrontendEnginnerSpecification.isSatisfiedBy(my)) {
  const JuejinFrontend = new JuejinFrontendEnginner(my)
  my.setSkill(JuejinFrontend.baseSkill.concat(my.skill || []))
  JuejinFrontend.doSomeInterestingThings()
  consoleUtil.init(<Data>{
    title: '个人信息',
    type: 'line',
    color: 'green',
    content: [
      '姓名：' + my.getName(),
      '手机号：' + my.getPhone(),
      '毕业学校：' + my.getGraduateInstitutions(),
      '毕业时间：' + my.getGraduateTime(),
      '邮箱：' + my.getEmail(),
      'github：' + my.getGitHub(),
      '工作经验：' + my.getWorkExperience()
    ].join(',')
  })
  consoleUtil.init(<Data>{
    title: '技能',
    content: my.getSkill().join(',')
  })

  consoleUtil.init(<Data>{
    title: '感兴趣',
    content: my.getInteresting().join(',')
  })
}
