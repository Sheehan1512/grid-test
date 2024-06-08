function GridItem({number}) {
  return (
    <div style={{
        backgroundColor: 'lightblue', 
        display: 'grid', 
        placeItems: 'center',
        // border: '1px solid black',
    }}>
        <div style={{
            // backgroundColor: 'wheat', 
            aspectRatio: '1/1', 
            width: '100%',
            border: '1px solid black',
            display: 'grid',
            // placeItems: 'center',
        }}></div>
        {/* }}>{number}</div> */}
    </div>
  )
}

export default GridItem