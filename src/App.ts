import * as express from 'express'

class App {
    public express

    constructor() {
        this.express = express()
        this.createRoutes()
    }

    private createRoutes(): void {
        const router = express.Router()

        router.get('/', (req, res) => {
            res.json({
                message: 'New Message!'
            })
        })

        router.get('/dash', (req, res) => {
            res.send('<h1>TESTEEEE<h1>')
        })

        this.express.use('/', router)
    }
}

export default new App().express