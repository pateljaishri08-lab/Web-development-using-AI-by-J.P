export function EventHandling() {
  function handleClick() {
    alert('Welcome to React Project!')
    console.log('Welcome to React Project!')
  }

  return (
    <div>
      <h2 onClick={handleClick}>Welcome to React Project!</h2>
    </div>
  )
}
