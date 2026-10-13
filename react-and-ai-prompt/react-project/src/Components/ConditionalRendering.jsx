import { useState } from 'react'

function HouseForRent() {
  return (
    <div>
      <h2>House for Rent</h2>
      <p>Location: Near City Center</p>
      <p>Rent: ₹18,000 / month</p>
      <p>Bedrooms: 2 BHK</p>
      <p>Deposit: ₹50,000</p>
      <p>Available from: Immediate</p>
      <p>Contact: 98765 43210</p>
    </div>
  )
}

function HouseForSale() {
  return (
    <div>
      <h2>House for Sale</h2>
      <p>Location: Green Valley</p>
      <p>Price: ₹65,00,000</p>
      <p>Bedrooms: 3 BHK</p>
      <p>Area: 1200 sq ft</p>
      <p>Parking: 1 car</p>
      <p>Contact: 98765 43210</p>
    </div>
  )
}

export function ConditionalRendering() {
  const [selection, setSelection] = useState('rent')

  return (
    <div>
      <h2>Select house type</h2>

      <button onClick={() => setSelection('rent')}>Rent</button>
      <button onClick={() => setSelection('sale')}>Sale</button>

      {selection === 'rent' ? <HouseForRent /> : <HouseForSale />}
    </div>
  )
}