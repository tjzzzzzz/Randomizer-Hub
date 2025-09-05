import './App.css'
import { useState } from 'react'
import RandomNumberModal from './RandomNumberModal.jsx'
import RandomPasswordModal from './RandomPasswordModal.jsx'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function App() {
  const [isRandomNumberModalOpen, setIsRandomNumberModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)

  const handleOpenRandomNumberModal = () => setIsRandomNumberModalOpen(true)
  const handleCloseRandomNumberModal = () => setIsRandomNumberModalOpen(false)

  const handleOpenPasswordModal = () => setIsPasswordModalOpen(true)
  const handleClosePasswordModal = () => setIsPasswordModalOpen(false)

  return (
    <main>

     <div className="random-number-container">
      <h1 className="random-number-title">Random Number Generator</h1>
      <button
        className='random-number-button'
        onClick={handleOpenRandomNumberModal}
      >
        Generate Random Number
      </button>
      <RandomNumberModal isOpen={isRandomNumberModalOpen} onRequestClose={handleCloseRandomNumberModal} />
     </div>

     <div className="random-password-container">
      <h1 className="random-password-title">Random Password Generator</h1>
      <button
        className='random-password-button'
        onClick={handleOpenPasswordModal}
      >
        Generate Random Password
      </button>
      <RandomPasswordModal isOpen={isPasswordModalOpen} onRequestClose={handleClosePasswordModal} />
     </div>

    </main>
    
  )
}

export default App