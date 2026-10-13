export function ListinReact() {
  const students = [
    { id: 1, firstName: 'Aarav', lastName: 'Shah', maths: 92, english: 88 },
    { id: 2, firstName: 'Diya', lastName: 'Patel', maths: 85, english: 91 },
    { id: 3, firstName: 'Kabir', lastName: 'Mehta', maths: 78, english: 74 },
    { id: 4, firstName: 'Isha', lastName: 'Desai', maths: 89, english: 83 },
    { id: 5, firstName: 'Rohan', lastName: 'Singh', maths: 95, english: 90 },
  ]

  return (
    <div>
      <h2>Student Grades</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>
            {student.firstName} {student.lastName}
          </h3>
          <p>Maths: {student.maths}</p>
          <p>English: {student.english}</p>
        </div>
      ))}
    </div>
  )
}