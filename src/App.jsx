import { useState } from 'react'
import foto1 from '../../assets/snowy-mountain-peak-starry-galaxy-majesty-generative-ai.jpg'
import foto2 from '../../assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background.jpg'
import foto3 from '../../assets/field-surrounded-by-rocks-covered-greenery-blue-sky-sunlight-italy.jpg'
import foto4 from '../../assets/pretty-cloudscape.jpg'
import noFoto from '../../assets/6605525.jpg'
import './App.css'

function App() {

  const Contents = [
    {
      id:1,
      title: "Universo e Terra",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      img:`${foto1}`

    },
    {
      id:2,
      title:"Tutti al mare",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      img:`${foto2}`
    },
    {
      id:3,
      title: "Montagna e verde",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      img:`${foto3}`
    },
    {
      id:4,
      title: "il blu del cielo",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      img:`${foto4}`
    }
  ]

  return (
    <>
    
    </>
  )
}

export default App
