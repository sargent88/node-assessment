const userData = require('./userData.json')

module.exports = {

    allUsers: (req, res) => {
        let favoriteUsers = userData.filter((e) => {
            if (req.query.favorites) {
                return e.favorites.includes('react') 
            }else if (req.query.age) {
                return req.query.age > e.age
            }else if (req.query.lastname) {
                return req.query.lastname === e.last_name
            }else if (req.query.email) {
                return req.query.email === e.email
            }
            return true
            })
        res.status(200).send(favoriteUsers)
    },
    userId: (req, res) => {
        let userIdFunc = userData.filter((e) => {
            return e.id === Number(req.params.id)
        })
        if (userIdFunc.length > 0) {
            res.status(200).send(userIdFunc[0])
        } else {
            res.status(404).json(null)
        }
    },
    getAdmins: (req, res) => {
        let admins = []
        for (let i = userData.length-1; i >=0; i--) {
            if (userData[i].type === 'admin') {
                admins.unshift(userData[i])
            }
        }
        res.status(200).send(admins)
    },
    notAdmins: (req, res) => {
        let peons = []
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].type !== 'admin') {
                peons.push(userData[i])
            }
        }
        res.status(200).send(peons)
    },
    getByType: (req, res) => {
        myFunc = userData.filter((e) => {
            return e.type === req.params.type
        })
        res.status(200).send(myFunc)
    },
    updateUser: (req, res) => {
        let update = userData.splice(req.params.id-1,1,req.body)
        res.status(200).send(userData)
    },
    addUser: (req, res) => {
        req.body.id = userData.length + 1
        userData.push(req.body)
        res.status(200).send(userData)
    },
    deleteUser: (req, res) => {
        let remove = userData.splice(req.params.id-1, 1)
        res.status(200).send(userData)
    }

}