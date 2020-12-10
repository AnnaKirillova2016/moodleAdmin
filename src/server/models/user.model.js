const db = require('../dataBase')
const user = function (user) {
  this.id = user.id
  this.login = user.login
  this.password = user.password
  this.isActive = user.isActive
  this.firstName = user.firstName
  this.lastName = user.lastName
}

user.Create = (newUser, result) => {
  db.query('INSERT INTO User SET ?', newUser, (err, res) => {
    if (err) {
      console.log('ошибка: ', err)
      result(err, null)
      return
    }
    console.log('Пользователь добавлен', {id: res.insertId, ...newUser})
    result(null, { id: res.insertId, ...newUser })
  })
}

user.getAll = result => {
  db.query('SELECT * FROM User', (err, res) => {
    if (err) {
      console.log('ошибка: ', err)
      result(null, err)
      return
    }

    console.log('пользователь: ', res)
    result(null, res)
  })
}

user.findById = (userId, result) => {
  db.query(`SELECT * FROM User WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log('ошибка: ', err)
      result(err, null)
      return
    }

    if (res.length) {
      console.log('найден пользователь: ', res[0])
      result(null, res[0])
      return
    }
    result({ kind: 'не найдено' }, null)
  })
}

user.updateById = (id, user, result) => {
  const queryUpdate = 'UPDATE User SET login = ?, password = ?, isActive = ?, firstName = ?, lastName = ?  WHERE id = ?'
  db.query(
    queryUpdate,
    [user.login, user.password, user.isActive, user.firstName, user.lastName, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }

      if (res.affectedRows === 0) {
        result({ kind: 'не найдено' }, null)
        return
      }

      console.log('Пользоватеь обновлен ', { id: id, ...user })
      result(null, { id: id, ...user })
    }
  )
}

user.remove = (id, result) => {
  const queryDelete = 'DELETE FROM User WHERE id = ?'
  db.query(queryDelete, id, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    if (res.affectedRows === 0) {
      result({ kind: 'не найдено' }, null)
      return
    }

    console.log('Удален пользователь с  ', id)
    result(null, res)
  })
}

user.removeAll = result => {
  db.query('DELETE FROM User', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log(`deleted ${res.affectedRows} users`)
    result(null, res)
  })
}
module.exports = user
