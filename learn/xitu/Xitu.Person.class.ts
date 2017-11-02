import { Specification, PersonProperty } from './xitu.interface'
export default class Person implements PersonProperty {
  name: string;
  phone: string;
  graduate_institutions: string;
  graduation_time: string;
  email: string;
  work_experience: string;
  write_bug: boolean;
  interesting: boolean;
  skill: string[];
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
      skill
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
  setInteresting(interesting: boolean) {
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
  setWriteBug(write_bug: boolean) {
    this.write_bug = write_bug;
  }
  isInteresting() { 
      return this.interesting;
  }
  canWriteBUG() { 
      return this.write_bug;
  }
}
