import * as React from 'react';

const ListRendering1 = () => {
  const users = ['Albert', 'Romy', 'Shinta', 'Fenny', 'Desta']
  // Mengharuskan setiap itemnya memiliki props/ menggunakan index dari array sebagai key
  const displayUser = users.map((user, index) => <li key={index}>{user}</li>)
  return <ul>{displayUser}</ul>
}

const ListRendering2 = () => {
  const users = [
    { id: 1, name: 'Albert', gender: 'male' },
    { id: 2, name: 'Romy', gender: 'male' },
    { id: 3, name: 'Shinta', gender: 'female' },
    { id: 4, name: 'Fenny', gender: 'female' },
    { id: 5, name: 'Desta', gender: 'Romy' },
  ]
  return <ul>
    {
      users.length > 0 && users.map((user) => {
        return <li key={user.id}>{user.name} ({user.gender})</li>
      })
    }
  </ul>
}

export { ListRendering1, ListRendering2 };