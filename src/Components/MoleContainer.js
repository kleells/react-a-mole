import { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer (props) {
        let [mole, setMole] = useState(false)

        const handleClick = (e) => {
            props.setScore(props.score + 1)
            setMole(false)
        }

        let displayMole = mole ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} /> : <EmptySlot toggle={setMole} />

    return (
        <div>
        <div style={{'display': 'inline-block', 'width': '30vw'}}></div>    
            {displayMole}
        </div>
    )
}

export default MoleContainer;