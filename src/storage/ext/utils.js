import Axios from 'axios'

export default {
  iguFilter (arr, uid) {
    return arr.filter(item => item.Институт.uid === uid)
  },
  iguPush (data, arrRes, arrReq, i) {
    let childrenT = this.iguFilter(arrReq, data.Ссылка.uid)
    let children = []
    for (let j = 0; j < childrenT.length; j++) {
      this.iguPush(childrenT[j], children, arrReq, j)
    }

    arrRes.push({
      id: i,
      name: data.Ссылка.name,
      children: children,
      parent: 0,
      description: data.Ссылка.name,
      idnumber: data.Ссылка.uid
    })
  },

  moodleFilter (arr, uid) {
    return arr.filter(item => item.parent === uid)
  },
  moodlePush (data, arrRes, arrReq, i){
    let childrenT = this.moodleFilter(arrReq, data.id)
    let children = []
    for (let j = 0; j < childrenT.length; j++) {
      this.moodlePush(childrenT[j], children, arrReq, j)
    }
    arrRes.push({
      id: i,
      name: data.name,
      children: children,
      parent: data.id,
      description: data.description,
      idnumber: data.idnumber
    })
  },
  generateSt (tree) {
    for (let i = 0; i < tree.length; i++) {
      let ch = tree[i].children
      if (ch.length > 0) {
        for (let j = 0; j < ch.length; j++) {
          tree.push(ch[j])
        }
      }
    }
    return tree
  },
  async sendToMoodle (arr, parent) {
    let tree = arr
    for (let i = 0; i < tree.length; i++) {
      let response = await Axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/moodleapi/createcat',
        headers: {},
        data: {
          name: tree[i].name,
          parent: parent,
          idnumber: tree[i].idnumber,
          description: tree[i].description
        }
      })
      tree[i].id = await response.data[0].id
      if (tree[i].children.length > 0) {
        this.sendToMoodle(tree[i].children, tree[i].id)
      }
    }
  }

}
