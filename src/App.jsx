import './App.css'
import { useState } from 'react'
import RandomNumberModal from './RandomNumberModal.jsx'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div>
      <h1 className="random-number-title">Random Number Generator</h1>
      <button
        className='random-number-button'
        onClick={handleOpenModal}
      >
        Generate Random Number
      </button>
      <RandomNumberModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  )
}

export default App