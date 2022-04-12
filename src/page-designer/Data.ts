// interface Node {
//   label: string
//   name: string
//   type: string
//
//   getData(key: string): any
//   setData(key: string, val: any): void
//   delData(key: string): void
//   clearData(): void
//   getBody(): Node[]
//   getSchema(): string
//   watch(target: string): void
//   recieve(source: string, val: any): void
//   send(val: any): void
// }
//
// class baseNode implements Node {
//   data: object = {}
//   label: string
//   name: string
//   type: string
//   parent: Node
//
//   constructor(parent: Node) {
//     this.parent = parent;
//   }
//
//   clearData(): void {
//     this.data = {}
//   }
//
//   delData(key: string): void {
//     delete this.data[key]
//   }
//
//   getData(key: string): any {
//     const val = this.data[key]
//     if (val === undefined) {
//       return this.parent.getData(key)
//     }
//     return val
//   }
//
//   setData(key: string, val: any): void {
//     if (val === undefined) {
//       val = null
//     }
//     this.data[key] = val
//   }
//
//   getBody(): Node[] {
//     return [];
//   }
//
//   getSchema(): string {
//     return '';
//   }
//
//   recieve(source: string, val: any) {
//     // console.log('我是' + this.name + ',' + source + '通知了我', val)
//   }
//
//   send(val: any) {
//     OB.notify(this.name, this.name)
//   }
//
//   watch(target: string): void {
//     OB.register(this, target)
//   }
// }
//
// export class Form extends baseNode implements Node {
//   constructor(__super: Node = new Page()) {
//     super(__super)
//     // TODO init api
//     this.data = {
//       a: 'aaa',
//       b: 111,
//       page: 'form'
//     }
//   }
//
//   getBody(): Node[] {
//     return [];
//   }
//
//   getSchema(): string {
//     return '';
//   }
// }
//
// export class Input extends baseNode implements Node {
//   constructor(parent: Node) {
//     super(parent);
//   }
//
//   getBody(): Node[] {
//     return [];
//   }
//
//   getSchema(): string {
//     return '';
//   }
//
//   clearData(): void {
//     this.parent.clearData()
//   }
//
//   delData(key: string): void {
//     this.parent.delData(key)
//   }
//
//   getData(key: string): any {
//     return this.parent.getData(key)
//   }
//
//   setData(key: string, val: any): void {
//     this.parent.setData(key, val)
//   }
// }
//
//
// export class Page extends baseNode implements Node {
//   constructor(parent: Node) {
//     super(parent);
//     this.data = { page: 'page' }
//   }
//
//   getBody(): Node[] {
//     return [];
//   }
//
//   getSchema(): string {
//     return '';
//   }
//
// }
//
// class observer {
//
//   registers: object
//
//   constructor() {
//     this.registers = {}
//   }
//
//   register(receiver: Node, sender: string) {
//     if (this.registers[sender] === undefined) {
//       this.registers[sender] = []
//     }
//     this.registers[sender].push(receiver)
//   }
//
//   notify(sender: string, val: any) {
//     const receivers = this.registers[sender]
//     receivers.forEach(v => {
//       // console.log('v', v)
//       v.recieve(sender, val)
//     })
//   }
// }
//
// let OB = new observer()
