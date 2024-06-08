function GridItem({ number }) {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }}>
      {number}
    </div >
  )
}

export default GridItem