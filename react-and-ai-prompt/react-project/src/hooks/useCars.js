export function useCars(count = 10) {
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, color: 'White' },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019, color: 'Black' },
    { id: 3, brand: 'Ford', model: 'Focus', year: 2018, color: 'Blue' },
    { id: 4, brand: 'Hyundai', model: 'i20', year: 2021, color: 'Grey' },
    { id: 5, brand: 'Tata', model: 'Nexon', year: 2022, color: 'Red' },
    { id: 6, brand: 'Maruti', model: 'Swift', year: 2020, color: 'Silver' },
    { id: 7, brand: 'Kia', model: 'Seltos', year: 2023, color: 'Green' },
    { id: 8, brand: 'Mahindra', model: 'XUV700', year: 2022, color: 'White' },
    { id: 9, brand: 'Skoda', model: 'Slavia', year: 2021, color: 'Blue' },
    { id: 10, brand: 'Volkswagen', model: 'Polo', year: 2017, color: 'Yellow' },
  ]

  const safeCount = Number.isFinite(Number(count)) ? Number(count) : 0
  const clampedCount = Math.max(0, Math.min(10, safeCount))

  return cars.slice(0, clampedCount)
}
