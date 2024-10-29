import express from "express"
const app = express()
// app.get('/', (req, res) => {
//     res.send('server is ready')
//   })

app.get('/name',(req, res) => {
    const name = [
        {
            id: 1,
            title: "What is your name",
            content: "your name is junaid"

        },
        {
            id: 2,
            title: "What is your name",
            content: "your name is zangi"
        },
        {
            id: 3,
            title: "What is your name",
            content: "your name is naeem"
        },
        {
            id: 4,
            title: "What is your name",
            content: "your name is hafiz numan"
        },
        {
            id: 5,
            title: "What is your name",
            content: "your name is Husnain"
        },
        {
            id: 6,
            title: "What is your name",
            content: "your name is ali"
        }
    ]
    res.send(name)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
  }
)  