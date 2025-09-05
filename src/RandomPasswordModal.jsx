import Modal from 'react-modal'
import { useState } from 'react'
import generateRandomPassword from './RandomPassword'
function RandomPasswordModal({ isOpen, onRequestClose }) {
    const [passwordLength, setPasswordLength] = useState(12)
    const [includeUppercase, setIncludeUppercase] = useState(true)
    const [includeLowercase, setIncludeLowercase] = useState(true)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSymbols, setIncludeSymbols] = useState(true)
    const [password, setPassword] = useState("")

    const handleGeneratePassword = () => {
      const newPassword = generateRandomPassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
      setPassword(newPassword)
    }

    return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
      contentLabel="Random Password"
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
      <h2>Random Password Generator</h2>
      <div>
       <label> 
        Password Length: 
        <input 
        type="number" 
        min="8" 
        max="128" 
        value={passwordLength} 
        onChange={(e) => setPasswordLength(e.target.value)}
        />
       </label>
       <br></br>
       <label>
        Include Lowercase Letters:
        <input 
        type="checkbox" 
        checked={includeLowercase} 
        onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
       </label>
       <br></br>
       <label>
        Include Uppercase Letters:
        <input 
        type="checkbox" 
        checked={includeUppercase} 
        onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
       </label>
       <br></br>
       <label>
        Include Numbers:
        <input 
        type="checkbox" 
        checked={includeNumbers} 
        onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
       </label>
       <br></br>
       <label>
        Include Symbols:
        <input 
        type="checkbox" 
        checked={includeSymbols} 
        onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
       </label>
       <br></br>
       <button onClick={handleGeneratePassword}>Generate Password</button>

       {password && (
         <div>
           <h2>Generated Password</h2>
           <p>Your random password is: <strong>{password}</strong></p>
         </div>
       )}
       <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  )
  
}



export default RandomPasswordModal