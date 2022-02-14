import '../styles/app.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <h1>THE COLORS NFT</h1>
      <p>20 beautiful colors on the Solana blockchain.</p>
      <Link to='/mint'>MINT</Link>
    </div>
  );
}

export default App;
