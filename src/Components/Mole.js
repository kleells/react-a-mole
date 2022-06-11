import { useEffect } from 'react';
import moleImg from '../mole.png'

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 7000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img className="image" style={{'width': '20vw'}} src={moleImg} onClick={props.handleClick} alt="Mole icon"/>
        </div>
    )
}

export default Mole;