import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container portal-container">
        <div className="row g-4">
          <div className="col-6 col-md-6"><h2>Links</h2><a href="#directory">Home</a><a href="#computer-science">Computer Science</a><a href="#courses">Courses</a><a href="#reports">Reports</a></div>
          <div className="col-6 col-md-6"><h2>Contact Info</h2><a href="mailto:info@studentportal.com">Contact Us</a><span>+1: 123 456 7890</span><span>info@studentportal.com</span></div>
        </div>
        <div className="copyright">© 2024 StudentPortal. All rights reserved.</div>
      </div>
    </footer>
  );
}
