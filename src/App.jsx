import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div className='flex flex-col'>
            
            <input type="text" name='password' className='' placeholder='Password'/>
            <input type="range" name="length" className='' />
            <label htmlFor="length">Length</label>
            <input type="checkbox" name="number" />
            <label htmlFor="number">Number</label>
            <input type="checkbox" name="symbol" id="" />
            <label htmlFor="symbol">Symbol</label>
        </div>
      </div>
    </>
  )
}

export default App
