import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import StudentCard from './components/StudentCard.jsx';
import Footer from './components/Footer.jsx';

const initialStudents = [
  { id: 101, name: 'Jane Doe', major: 'Computer Science', year: 2, gpa: 3.8, email: 'jane.doe@studentportal.com', views: 0 },
  { id: 102, name: 'Mary Doe', major: 'Computer Science', year: 2, gpa: 3.8, email: 'mary.doe@studentportal.com', views: 0 },
  { id: 103, name: 'Gant Doe', major: 'Computer Science', year: 2, gpa: 3.8, email: 'gant.doe@studentportal.com', views: 0 },
  { id: 104, name: 'Amm Doe', major: 'Computer Science', year: 2, gpa: 3.8, email: 'amm.doe@studentportal.com', views: 0 },
  { id: 105, name: 'Sara Khan', major: 'Software Engineering', year: 3, gpa: 3.7, email: 'sara.khan@studentportal.com', views: 0 },
  { id: 106, name: 'Ali Ahmed', major: 'Information Technology', year: 2, gpa: 3.5, email: 'ali.ahmed@studentportal.com', views: 0 },
  { id: 107, name: 'Noor Malik', major: 'Computer Science', year: 4, gpa: 3.9, email: 'noor.malik@studentportal.com', views: 0 },
  { id: 108, name: 'Hamza Iqbal', major: 'Software Engineering', year: 1, gpa: 3.4, email: 'hamza.iqbal@studentportal.com', views: 0 },
  { id: 109, name: 'Ayesha Noor', major: 'Computer Science', year: 3, gpa: 3.6, email: 'ayesha.noor@studentportal.com', views: 0 },
  { id: 110, name: 'Usman Tariq', major: 'Data Science', year: 2, gpa: 3.7, email: 'usman.tariq@studentportal.com', views: 0 },
  { id: 111, name: 'Hira Shah', major: 'Information Technology', year: 4, gpa: 3.9, email: 'hira.shah@studentportal.com', views: 0 },
  { id: 112, name: 'Zain Raza', major: 'Computer Science', year: 1, gpa: 3.3, email: 'zain.raza@studentportal.com', views: 0 },
];
const PAGE_SIZE = 4;

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [alertMessage, setAlertMessage] = useState('Student records have been successfully updated.');
  const [alertVisible, setAlertVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  const filteredStudents = useMemo(() => students.filter(student =>
    `${student.name} ${student.id} ${student.major}`.toLowerCase().includes(appliedSearch.toLowerCase())
  ), [students, appliedSearch]);
  const pageCount = Math.max(1, Math.ceil(filteredStudents.length / PAGE_SIZE));
  const pageStudents = filteredStudents.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleSearch(event) {
    event.preventDefault();
    setAppliedSearch(searchTerm.trim());
    setCurrentPage(1);
  }

  function handleViewProfile(id) {
    const updated = students.map(student => student.id === id ? { ...student, views: student.views + 1 } : student);
    setStudents(updated);
    setSelectedStudent(updated.find(student => student.id === id));
  }

  function handleDelete(id) {
    const student = students.find(item => item.id === id);
    setStudents(previous => previous.filter(studentItem => studentItem.id !== id));
    if (selectedStudent?.id === id) setSelectedStudent(null);
    setAlertMessage(`${student?.name || 'Student'} has been removed from the directory.`);
    setAlertVisible(true);
    setCurrentPage(page => Math.min(page, Math.max(1, Math.ceil((filteredStudents.length - 1) / PAGE_SIZE))));
  }

  return (
    <div className="app-shell">
      <Navbar searchTerm={searchTerm} onSearchChange={event => setSearchTerm(event.target.value)} onSearch={handleSearch} />
      <main className="container portal-container main-content" id="directory">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb custom-breadcrumb mb-0">
            <li className="breadcrumb-item breadcrumb-code">.breadcrumb</li>
            <li className="breadcrumb-item breadcrumb-code">breadcrumb-item</li>
            <li className="breadcrumb-item"><a href="#home">Home</a></li>
            <li className="breadcrumb-item"><a href="#students">Students</a></li>
            <li className="breadcrumb-item active" aria-current="page">Directory</li>
          </ol>
        </nav>
        <div className="page-heading d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div><h1>Page Header</h1></div>
          <button className="btn btn-primary btn-sm" onClick={() => { setAlertMessage('This directory demo uses sample student records.'); setAlertVisible(true); }}>Add New Student</button>
        </div>

        <div className="row g-3 student-grid">
          {pageStudents.map(student => <StudentCard key={student.id} student={student} onViewProfile={handleViewProfile} onDelete={handleDelete} showDetails={showDetails} onToggleDetails={() => setShowDetails(value => !value)} />)}
          {pageStudents.length === 0 && <div className="col-12"><div className="empty-state">No students found. Try another search.</div></div>}
        </div>

        <nav aria-label="Student directory pages" className="pagination-wrap">
          <ul className="pagination pagination-sm justify-content-center mb-0">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}><button className="page-link" disabled={currentPage === 1} onClick={() => setCurrentPage(page => page - 1)}>Previous</button></li>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(page => <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}><button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button></li>)}
            <li className={`page-item ${currentPage === pageCount ? 'disabled' : ''}`}><button className="page-link" disabled={currentPage === pageCount} onClick={() => setCurrentPage(page => page + 1)}>Next</button></li>
          </ul>
        </nav>

        {selectedStudent && <section className="profile-panel card mt-3" aria-live="polite"><div className="card-body">
          <div className="d-flex justify-content-between align-items-start"><div><span className="eyebrow">STUDENT PROFILE</span><h2 className="h5 mt-1">{selectedStudent.name}</h2></div><button className="btn-close" aria-label="Close profile" onClick={() => setSelectedStudent(null)} /></div>
          <div className="profile-info"><span><strong>Student ID:</strong> {selectedStudent.id}</span><span><strong>Major:</strong> {selectedStudent.major}</span><span><strong>Year:</strong> {selectedStudent.year}</span><span><strong>GPA:</strong> {selectedStudent.gpa.toFixed(1)}</span><span><strong>Email:</strong> {selectedStudent.email}</span><span><strong>Profile views:</strong> {selectedStudent.views}</span></div>
        </div></section>}

        {alertVisible && <div className="alert alert-info alert-dismissible fade show status-alert" role="alert">{alertMessage}<button type="button" className="btn-close" aria-label="Close alert" onClick={() => setAlertVisible(false)} /></div>}
      </main>
      <Footer />
    </div>
  );
}
