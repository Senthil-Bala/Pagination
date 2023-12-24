import React from 'react'

function DataTable({currentItems}) {
  return (
    <div>
         return (
  
  <table>

      <thead>

          <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

             

          </tr>

      </thead>

      <tbody>

          {currentItems.map(item => (

              <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>{item.role}</td>

              </tr>

          ))}

      </tbody>

  </table>

    </div>
  )
}

export default DataTable