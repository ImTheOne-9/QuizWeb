import { useSelector } from 'react-redux';
import videoHomepage from '../../assets/video-homepage.mp4';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const account = useSelector(state => state.user.account)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const navigate = useNavigate();
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type='video/mp4' />
            </video>
            <div className='homepage-content'>
                <p className='homepage-title'>Get to know your customers with forms worth filling out</p>
                <p className='homepage-des'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</p>
                {isAuthenticated === false ?
                    <button className='btn-start' onClick={() => navigate('/login')} >Get Started - it's free</button>
                    :
                    <button className='btn-start' onClick={() => navigate('/users')}>Doing Quiz now</button>
                }
            </div>
        </div>
    )
}

export default HomePage;