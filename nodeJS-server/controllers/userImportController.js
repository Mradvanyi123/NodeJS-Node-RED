const csvController= require('./csvController')

exports.getUsers = async (req, res) => {
    console.log("getUsers")
    try {
        const users=await csvController.getUsersFromCSV();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).end();
        console.log(err);
    }
}

exports.getUser = async (req, res) => {
    console.log("getUser")
    try {
        const user=await csvController.getUserFromCSV(req.query.userName);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).end();
        console.log(err);
    }
}

exports.postUsers = async (req, res) => {
    console.log("postUsers")
    try {
        await csvController.insertUsersToCSV(req.body.users)
        res.status(200).json({message:"Users successfully inserted"})
    } catch (err) {
        res.status(500).end();
        console.log(err);
    }
}