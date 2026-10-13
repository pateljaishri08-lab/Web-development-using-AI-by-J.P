import React, { useState } from 'react'
import { HomePage } from './Pages/HomePage'
import { Aboutus } from './Pages/Aboutus'
import { TeacherInfo } from './Pages/TeacherInfo'
import { CourseInfo } from './Pages/CourseInfo'
import { Nav } from './Components/Nav'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage />;
      case 'about': return <Aboutus />;
      case 'teacher': return <TeacherInfo />;
      case 'course': return <CourseInfo />;
      default: return <HomePage />;
    }
  }

  return (
    <div>
      <Nav currentPage={page} setPage={setPage} />
      {renderPage()}
    </div>
  )
}

export default App