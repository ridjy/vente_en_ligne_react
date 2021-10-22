import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'La maison jungle';//test
    return (<div className='lmj-banner' /*style={{ color : 'blue', textAlign : 'left', fontSize : 15 }}*/>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
</div>)
} 

export default Banner