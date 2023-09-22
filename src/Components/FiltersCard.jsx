import React from 'react'

const FiltersCard = ({setgender, setStatus}) => {
  return (
    <div>
    <select
      className="filters"
      name="status"
      id=""
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="">Filter by Status </option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="Unknown">Unknown</option>
    </select>
    <select
      className="filters"
      name="gender"
      id=""
      onChange={(e) => setgender(e.target.value)}
    >
      <option value="">Filter by Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>
  )
}

export default FiltersCard