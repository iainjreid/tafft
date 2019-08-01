const atatus = new Proxy(Function, {
  apply() {
    console.log("apply %s", )
    return atatus
  },

  get(obj, prop) {
    console.log("get %s", prop)
    return atatus
  }
})


atatus.asd.dfg.sdf().sdf