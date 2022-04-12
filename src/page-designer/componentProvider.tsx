class ComponentProvider {
  cached: object

  constructor() {
    this.cached = {}
  }

  add(name: any, component: any): any {
    Object.assign(this.cached, {[name]: component})
  }

  get(name: any): any {
    const cached = this.cached
    return cached[name as keyof typeof cached]
  }
}

const componentProvider = new ComponentProvider()

export default componentProvider



