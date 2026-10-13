import React from 'react';

function StudentAvatar() {
  return (
    <div className="avatar-panel" aria-hidden="true">
      <svg viewBox="0 0 100 80" className="avatar"><circle cx="50" cy="25" r="17" /><path d="M17 78c2-21 15-31 33-31s31 10 33 31z" /></svg>
    </div>
  );
}

export default function StudentCard({ student, onViewProfile, onDelete, showDetails, onToggleDetails }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <article className="card student-card h-100">
        <StudentAvatar />
        <div className="card-body d-flex flex-column">
          <h2 className="student-name">{student.name}</h2>
          <div className="student-meta">ID: {student.id}</div>
          <div className="student-meta">Major: {student.major}</div>
          <div className="student-meta">Year: {student.year}</div>
          <div className="student-meta">GPA: {student.gpa.toFixed(1)}</div>
          {showDetails && (
            <div className="extra-details mt-2">
              <div><strong>Email:</strong> {student.email}</div>
              <div><strong>Profile views:</strong> {student.views}</div>
            </div>
          )}
          <div className="card-actions mt-auto pt-2 d-flex flex-wrap gap-1">
            <button className="btn btn-outline-primary btn-sm" onClick={() => onViewProfile(student.id)}>View Profile</button>
            <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}>Delete</button>
          </div>
          <button className="btn btn-outline-primary btn-sm detail-toggle" onClick={() => onToggleDetails(student.id)}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </article>
    </div>
  );
}
