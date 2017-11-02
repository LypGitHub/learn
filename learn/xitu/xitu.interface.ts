export interface PersonProperty {
  /**
   * 姓名
   * 
   * @type {string}
   * @memberof PersonProperty
   */
  name?: string;
  /**
   * 手机号
   * 
   * @type {string}
   * @memberof PersonProperty
   */
  phone?: string;
  /**
   * 毕业院校
   * 
   * @type {string}
   * @memberof PersonProperty
   */
  graduate_institutions?: string;
  /**
   * 毕业时间
   * 
   * @type {string}
   * @memberof PersonProperty
   */
  graduation_time?: string;
  /**
   * 工作经历
   * 
   * @type {string}
   * @memberof PersonProperty
   */
  work_experience?: string;
  /**
   * 是否写bug
   * 
   * @type {boolean}
   * @memberof PersonProperty
   */
  write_bug?: boolean;
  /**
   * 是否感兴趣
   * 
   * @type {boolean}
   * @memberof PersonProperty
   */
  interesting?: boolean;
  /**
   * 邮箱
   * 
   * @type {string}
   * @memberof PersonProperty
   */
  email?: string;
  /**
   * 技能
   * 
   * @type {string[]}
   * @memberof PersonProperty
   */
  skill: string[];
  getName(): string;
  setName(name: string): void;
  getPhone(): string;
  setPhone(phone: string): void;
  getGraduateInstitutions(): string;
  setGraduateInstitutions(graduate_institutions: string): void;
  getGraduateTime(): string;
  setGraduateTime(graduation_time: string): void;
  getEmail(): string;
  setEmail(email: string): void;
  getWorkExperience(): string;
  setWorkExperience(work_experience: string): void;
  getInteresting(): boolean;
  setInteresting(interesting: boolean): void;
  getWriteBug(): boolean;
  getSkill(): string[];
  setSkill(skill: string[]): void;
  setWriteBug(write_bug: boolean): void;
  isInteresting(): boolean;
  canWriteBUG(): boolean;
}

export interface Specification {
  isSatisfiedBy(person: PersonProperty);
};

export interface Frontend {
  /**
   * 基础技能
   * 
   * @type {string[]}
   * @memberof Frontend
   */
  baseSkill: string[];
  getBaseSkill(): string[];
  personSkill(): string[];
  tryToPlay(thing: string): string;
}