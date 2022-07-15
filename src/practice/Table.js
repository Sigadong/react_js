sdfgasgimport * as React from 'react'

const Table = () => {
  const users = [
    { id: 1, name: 'Albert', gender: 'male' },
    { id: 2, name: 'Romy', gender: 'male' },
    { id: 3, name: 'Shinta', gender: 'female' },
    { id: 4, name: 'Fenny', gender: 'female' },
    { id: 5, name: 'Desta', gender: 'Romy' },
  ]

  return <table border='1'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {
        users.length > 0 && users.map((user) => {
          const { id, name, gender } = user
          return <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{gender}</td>
          </tr>
        })
      }
    </tbody>
  </table>
}

export default Table;