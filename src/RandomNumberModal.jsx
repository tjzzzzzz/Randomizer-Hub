import { useState } from 'react'
import Modal from 'react-modal'
import getRandomNumberForPlayers from './RandomNumber.jsx'

function RandomNumberModal({ isOpen, onRequestClose }) {
  const [randomNum, setRandomNum] = useState(null)
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [players, setPlayers] = useState(1)

  const handleGenerate = () => {
    const num = getRandomNumberForPlayers(Number(min), Number(max), Number(players))
    setRandomNum(num)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Random Number Parameters"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },
        content: {
          top: '40%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#222',
          color: '#fff',
          borderRadius: '10px',
          padding: '2rem',
          minWidth: '300px'
        }
      }}
    >
      <h2>Enter Range And Players</h2>
      <div>
        <label>
          Amount of players:
          <input
            type="number"
            value={players}
            onChange={e => setPlayers(e.target.value)}
            style={{ margin: '0 1rem' }}
          />
        </label>
        <label>
          Min:
          <input
            type="number"
            value={min}
            onChange={e => setMin(e.target.value)}
            style={{ margin: '0 1rem' }}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            value={max}
            onChange={e => setMax(e.target.value)}
            style={{ margin: '0 1rem' }}
          />
        </label>
      </div>
      <button onClick={handleGenerate} style={{ margin: '1rem' }}>
        Generate
      </button>
      {randomNum !== null && (
        <div>
          <h3>Generated Numbers:</h3>
          <ul>
            {randomNum.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  )
}

export default RandomNumberModal