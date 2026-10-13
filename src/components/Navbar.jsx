import React from 'react';

export default function Navbar({ searchTerm, onSearchChange, onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container portal-container">
        <a className="navbar-brand" href="#directory">StudentPortal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portalNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="portalNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link active" href="#directory">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#reports">Reports</a></li>
          </ul>
          <div className="d-flex align-items-center gap-2 nav-tools">
            <button className="btn btn-sm btn-light dropdown-toggle" type="button">Settings</button>
            <form className="d-flex" role="search" onSubmit={onSearch}>
              <input className="form-control form-control-sm search-input" aria-label="Search students" placeholder="Search" value={searchTerm} onChange={onSearchChange} />
              <button className="btn btn-primary btn-sm ms-2" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
