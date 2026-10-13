import '../assets/StudentsInfo.css'

export function StudentsInfo() {
  const students = [
    { id: 1, firstName: 'Aarav', lastName: 'Shah', maths: 92, english: 88, rollNo: 'A-101' },
    { id: 2, firstName: 'Diya', lastName: 'Patel', maths: 85, english: 91, rollNo: 'A-102' },
    { id: 3, firstName: 'Kabir', lastName: 'Mehta', maths: 78, english: 74, rollNo: 'A-103' },
    { id: 4, firstName: 'Isha', lastName: 'Desai', maths: 89, english: 83, rollNo: 'A-104' },
    { id: 5, firstName: 'Rohan', lastName: 'Singh', maths: 95, english: 90, rollNo: 'A-105' },
    { id: 6, firstName: 'Anaya', lastName: 'Joshi', maths: 81, english: 86, rollNo: 'A-106' },
    { id: 7, firstName: 'Vihaan', lastName: 'Verma', maths: 74, english: 79, rollNo: 'A-107' },
    { id: 8, firstName: 'Mira', lastName: 'Kulkarni', maths: 90, english: 92, rollNo: 'A-108' },
    { id: 9, firstName: 'Arjun', lastName: 'Nair', maths: 88, english: 80, rollNo: 'A-109' },
    { id: 10, firstName: 'Sara', lastName: 'Khan', maths: 83, english: 87, rollNo: 'A-110' },
  ]

  const classAverage = Math.round(
    students.reduce((sum, s) => sum + (s.maths + s.english) / 2, 0) / students.length
  )

  return (
    <div className="studentsPage">
      <header className="studentsHeader">
        <h1 className="studentsTitle">Students</h1>
        <p className="studentsSubtitle">
          Total: {students.length} • Class average: {classAverage}
        </p>
      </header>

      <section className="studentsCard" aria-label="Student list">
        <div className="studentsTableHeader" role="row">
          <div className="studentsTh" role="columnheader">
            Student
          </div>
          <div className="studentsTh" role="columnheader">
            Roll No
          </div>
          <div className="studentsTh" role="columnheader">
            Maths
          </div>
          <div className="studentsTh" role="columnheader">
            English
          </div>
          <div className="studentsTh" role="columnheader">
            Average
          </div>
        </div>

        <div className="studentsTableBody">
          {students.map((s) => {
            const avg = Math.round((s.maths + s.english) / 2)
            return (
              <article className="studentsRow" key={s.id} role="row">
                <div className="studentsCell" role="cell">
                  <div className="studentsName">
                    {s.firstName} {s.lastName}
                  </div>
                </div>
                <div className="studentsCell" role="cell">
                  <span className="studentsPill">{s.rollNo}</span>
                </div>
                <div className="studentsCell" role="cell">
                  {s.maths}
                </div>
                <div className="studentsCell" role="cell">
                  {s.english}
                </div>
                <div className="studentsCell" role="cell">
                  <span className="studentsScore">{avg}</span>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

