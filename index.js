import express from "express"
import cors from "cors"
import chalk from "chalk"
import UserRoute from "./routes/UserRoute.js"
import db from "./config/Database.js"
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(UserRoute)


app.listen(PORT, async () => {
    await db.sync()
    console.log(chalk.blue(`Server listen on port ${chalk.underline('http://localhost:' + PORT)}`))
})
