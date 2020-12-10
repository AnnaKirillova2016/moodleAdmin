const User = require('../models/user.model')
const Bcrypt = require('bcrypt')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Пользователь не создан!'
    })
  }

  let salt = Bcrypt.genSaltSync(10)
  const user = new User({
    login: req.body.login,
    password: Bcrypt.hashSync(req.body.password, salt),
    isActive: req.body.isActive,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  User.Create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Произошла ошибка во время выполнения кода'
      })
    } else { res.send(data) }
  })
}
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Что-то случилось во время получения всех пользователей'
      })
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
      res.send(data)
    }
  })
}

exports.auth = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(401).send({
          message: 'Не верный логин или пароль'
        })
      } else {
        res.status(401).send({
          message: 'Не верный логин или пароль'
        })
      }
    } else {
      if (!Bcrypt.compareSync(req.params.password, data.password)) {
        // authentication failed
        res.status(401).send({
          message: 'Не верный логин или пароль'
        })
      } else {
        // authentication successful
        return true
      }
      res.send(data)
    }
  })
}

exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Пользователь с id ${req.params.id} не найден.`
        })
      } else {
        res.status(500).send({
          message: 'Проблема с получением пользователя по id' + req.params.id
        })
      }
    } else res.send(data)
  })
}
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Пользователь не может быть пустой'
    })
  }
  User.updateById(
    req.params.Id,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Не найден пользователь с id ${req.params.Id}.`
          })
        } else {
          res.status(500).send({
            message: 'Error updating user with id ' + req.params.Id
          })
        }
      } else res.send(data)
    }
  )
}
exports.delete = (req, res) => {
  User.remove(req.params.Id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Не найдено дело с ${req.params.Id}.`
        })
      } else {
        res.status(500).send({
          message: 'Не могу удалить пользователя с ид: ' + req.params.Id
        })
      }
    } else { res.send({ message: `дело было успешно удалено` }) }
  })
}
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Что-то пошло не так во время удаления всех пользователей'
      })
    } else { res.send({ message: `Все дела успешно удалены` }) }
  })
}
