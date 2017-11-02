import chalk from 'chalk';
import { Data } from './xitu.interface'

export default class ConsoleUtil implements Data {
  color: string;
  type: string;
  content: string;
  title: string;
  createType = {
    'table': this.createTable,
    'line': this.createLine
  }

  defaultOption = <Data>{
    color: 'white',
    type: 'table',
    content: 'no content',
    title: 'no title'
  }

  init<T>(arg: Data): void {
    this.setColor(arg.color || this.defaultOption.color)
    this.setType(arg.type || this.defaultOption.type)
    this.setContent(arg.content || this.defaultOption.content)
    this.setTitle(arg.title || this.defaultOption.title)

    typeof this.createType[this.type] === 'function'
    ? this.createType[this.type].call(this)
    : null
  }

  setColor(color: string) {
    this.color = color;
  }

  setType(type: string) {
    this.type = type;
  }

  setContent(content: string) {
    this.content = content;
  }

  setTitle(title: string) {
    this.title = title;
  }

  wrapTitle() {
    return chalk.bgMagenta(`\n${chalk.white(this.title)}: `);
  }

  createLine() {
    const content = this.wrapTitle() + this.content.split(',').reduce((pre, next) => pre + next + '\n', '\n')

    return console.log(chalk[this.color](content))
  }

  createTable() {
    const content = this.content.split(',')
    const line = '\n-----------------------------------------\n'

    const result = this.wrapTitle() + content.reduce((pre, next, index) => 
      `${chalk.cyan(`${pre} ${++index}: ${next} `)}${chalk.green(line)}`, chalk.green(line))

    return console.log(result)
  }
}