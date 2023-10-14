// CUSTOM COMPONENTS
import Header from "./components/Header"
import Card from "./components/Card"

import data from './data/data'

function App() {

  const cardData = data.map((item, index) => {
    return (
      <Card 
        key={index}
        {...item}
      />
    )
  })

  return (
    <>
      <Header />
      <div className="card-container">
        {cardData}
      </div>
    </>
  )
}

export default App
