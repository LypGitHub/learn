import chalk from 'chalk';


interface Data {
  color: string;
  type: string;
  content: string;
  title?: string;
  setColor(color: string): void;
  setType(type: string): void;
  setContent(content: string): void;
}


export default class ConsoleUtil implements Data {
  color: string;
  type: string;
  content: string;
  title: string;
  createType = {
    'table': this.createTable()
  }

  defaultOption = <Data>{
    color: 'white',
    type: 'normal',
    content: 'no content',
    title: 'no title'
  }

  init(color: string, content: string, type: string, title: string) {
    this.setColor(color || this.defaultOption.color)
    this.setType(type || this.defaultOption.type)
    this.setContent(content || this.defaultOption.content)
    this.setTitle(title || this.defaultOption.title)
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
  createTable() {

  }
}