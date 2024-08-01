import React from 'react'
import About from './components/about/About';
import about from './json/about.json'
export default function Home() {
  return (
    <div>
    <About heading={about.values.heading} />  
    </div>
  )
}
