import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = () => {
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
                <button className='btn-start'>Get Started - it's free</button>
            </div>
        </div>
    )
}

export default HomePage;