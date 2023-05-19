
import { Link } from 'react-router-dom'
import './Landing.css'
 const Landing = () => {
    return(
        <div className='container-landing'>
            
            <Link to="/home">
                <button className='button-landing'>
                    <h5>&#x1f43e; World Dog's Welcome &#x1f43e;</h5>
                    
                </button>
            
            </Link>
        </div>
    )
}
export default Landing