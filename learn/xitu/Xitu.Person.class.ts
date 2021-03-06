import { Specification, PersonProperty } from './xitu.interface'
export default class Person implements PersonProperty {
  name: string;
  phone: string;
  graduate_institutions: string;
  graduation_time: string;
  email: string;
  work_experience: string;
  write_bug: boolean;
  interesting: string[];
  skill: string[];
  github: string;
  constructor(person: PersonProperty) {
    const {
      name,
      phone,
      graduate_institutions,
      graduation_time,
      email,
      work_experience,
      write_bug,
      interesting,
      skill,
      github
    } = person;
    this.setName(name)
    this.setPhone(phone)
    this.setGraduateInstitutions(graduate_institutions)
    this.setGraduateTime(graduation_time)
    this.setEmail(email)
    this.setWorkExperience(work_experience)
    this.setInteresting(interesting)
    this.setWriteBug(write_bug)
    this.setSkill(skill)
    this.setGitHub(github)
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getPhone() { 
    return this.phone;
  }
  setPhone(phone: string) {
    this.phone = phone;
  }
  getGraduateInstitutions() { 
    return this.graduate_institutions;
  }
  setGraduateInstitutions(graduate_institutions: string) { 
    this.graduate_institutions = graduate_institutions;
  }
  getGraduateTime() { 
    return this.graduation_time;
  }
  setGraduateTime(graduation_time: string) { 
    this.graduation_time = graduation_time;
  }
  getEmail() { 
      return this.email || '无';
  }
  setEmail(email: string) {
    this.email = email;
  }
  getWorkExperience() { 
    return this.work_experience;
  }
  setWorkExperience(work_experience: string) {
    this.work_experience = work_experience;
  }
  getInteresting() {
    return this.interesting;
  }
  setInteresting(interesting: string[]) {
    this.interesting = interesting;
  }
  getWriteBug() {
    return this.write_bug;
  }
  getSkill() {
    return this.skill;
  }
  setSkill(skill: string[]) {
    this.skill = skill;
  }
  getGitHub() {
    return this.github;
  }
  setGitHub(github: string) {
    this.github = github;
  }
  setWriteBug(write_bug: boolean) {
    this.write_bug = write_bug;
  }
  isInteresting(things: string[]) { 
    return this.interesting.some(item => things.includes(item));
  }
  canWriteBUG() { 
    return this.write_bug;
  }
}
