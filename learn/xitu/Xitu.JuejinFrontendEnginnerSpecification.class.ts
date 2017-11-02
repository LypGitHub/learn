import { Specification } from './xitu.interface'
export default class JuejinFrontendEnginnerSpecification implements Specification {
  isSatisfiedBy (person) {
    return person.isInteresting() && person.canWriteBUG()
  }
}