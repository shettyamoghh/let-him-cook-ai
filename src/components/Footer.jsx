import React from 'react'

export default function Footer() {
  return (
    <footer>
            <p>
                © {new Date().getFullYear()} Amogh Shetty 
                <span className="separator"> | </span>
                <a href="https://github.com/shettyamoghh" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                {/* <span className="separator"> | </span>
                <a href="https://yourpersonalwebsite.com" target="_blank" rel="noopener noreferrer" className="footer-link">Personal Website</a> */}
            </p>
    </footer>
  )
}