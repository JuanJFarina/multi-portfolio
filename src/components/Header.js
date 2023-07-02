import React from 'react'

export default function Header() {
  return (
    <header>
      <ul>
        <li>Minimalist</li>
        <li>Flat</li>
        <li>Microinteractions</li>
        <li>Dark Mode</li>
        <li className="switch-container">
          <input type="checkbox" id="language-switch" />
          <label for="language-switch"></label>
        </li>
      </ul>
    </header>
  )
}