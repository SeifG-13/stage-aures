const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

//UPLOAD AN IMAGE

// GET All ROWS
app.get("/allitems", async (req, res) => {
  try {
    const items = await pool.query("SELECT * FROM shopitems");
    res.json(items.rows);
  } catch (err) {
    console.error(err.message);
  }
});




app.get("/user", async (req, res) => {
    try {
      const user = await pool.query("SELECT * FROM users");
      res.json(user.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


  //cart
  app.post('/cart', async (req, res) => {
    const { img, title, price, reducedPrice } = req.body
   
  
    try {
      const cart = await pool.query(`INSERT INTO cart (itemId, img, title, price, reducedPrice) VALUES($1, $2,$3,$4,$5)`,
        [ img, title, price, reducedPrice])
      
    } catch (err) {
      console.error(err)
      if (err) {
        res.json({ detail: err.detail})
      }
    }
  })


  //cart1

  app.get("/cart1", async (req, res) => {
    try {
      const items = await pool.query("SELECT * FROM cart");
      res.json(items.rows);
    } catch (err) {
      console.error(err.message);
    }
  });







// signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
 

  try {
    const signUp = await pool.query(`INSERT INTO users (name, email, password) VALUES($1, $2,$3)`,
      [name, email, password])
  
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
    
    res.json({ email, token })
  } catch (err) {
    console.error(err)
    if (err) {
      res.json({ detail: err.detail})
    }
  }
})

//login
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email])

    if (!users.rows.length) return res.json({ detail: 'User does not exist!', email: email })
    
    const success = await (password === users.rows[0].password)
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

    if (success) {
      res.json({ 'email' : users.rows[0].email, token})
    } else {
      res.json({ detail: "Login failed", email: email})
    }
  } catch (err) {
    console.error(err)
  }
})

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
