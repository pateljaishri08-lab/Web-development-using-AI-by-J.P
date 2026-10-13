import { useEffect, useState } from 'react'
import { useCars } from '../hooks/useCars'
import '../assets/Style.css'

export function UseEffectinReact() {
  const [now, setNow] = useState(new Date())
  const [carCount, setCarCount] = useState(5)
  const cars = useCars(carCount)

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="title">Car Showcase</h1>
        <p className="subtitle">Live time + a simple custom hook demo</p>
      </header>

      <section className="card" aria-label="Current date and time">
        <h2 className="cardTitle">Today's Date and Time</h2>
        <p className="timeText">{now.toLocaleString()}</p>
      </section>

      <section className="card" aria-label="Cars list">
        <div className="cardHeaderRow">
          <h2 className="cardTitle">Cars</h2>
          <p className="hint">Choose 0 to 10 cars</p>
        </div>

        <div className="fieldRow">
          <label className="label" htmlFor="carCount">
            Number of cars to display
          </label>
          <input
            className="input"
            id="carCount"
            type="number"
            min="0"
            max="10"
            value={carCount}
            onChange={(e) => setCarCount(Number(e.target.value))}
          />
        </div>

        {cars.length === 0 ? (
          <div className="emptyState" role="status">
            <p className="emptyTitle">No cars to display</p>
            <p className="emptyText">Increase the number above to see cars.</p>
          </div>
        ) : (
          <div className="grid" aria-label="Car cards">
            {cars.map((car) => (
              <article className="carCard" key={car.id}>
                <h3 className="carTitle">
                  {car.brand} {car.model}
                </h3>
                <p className="meta">Year: {car.year}</p>
                <p className="meta">Color: {car.color}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}