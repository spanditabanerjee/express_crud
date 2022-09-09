// import express from 'express';
// const app = express()


// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'test',
//   password: '@Spandy04',
//   port: 5432,
// })

// app.getUserById ('/',Request, Response) => {
//     const id = parseInt(Request.params.id)
  
//     pool.query('SELECT * FROM Users WHERE id = $1', [id], (results) => {
      
//       Response.status(200).json(results.rows)
//     })
//   }
  
//   const createUser = (request, response) => {
//     const { name, email } = request.body
  
//     pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID: ${results.insertId}`)
//     })
//   }
  
//   const updateUser = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { name, email } = request.body
  
//     pool.query(
//       'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//       [name, email, id],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`User modified with ID: ${id}`)
//       }
//     )
//   }
  
//   const deleteUser = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User deleted with ID: ${id}`)
//     })
//   }

//   export default getUserById;
  
//   module.exports = {

//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser,
//   }
  