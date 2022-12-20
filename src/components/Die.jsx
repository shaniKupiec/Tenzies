function Die(props) {  
    let className = "die"
    className += props.isHeld ? ' held' : ''
    return (
      <div className={className} onClick={props.toggleHold}>{props.value}</div>
    )
  }
  
  export default Die
  