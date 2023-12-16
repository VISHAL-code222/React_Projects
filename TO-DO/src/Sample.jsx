import React from 'react'

function Sample({name,age,color}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{color}</h3>
    </div>
  )
}

export default React.memo(Sample)
