import './LeftBlock.css';
import Image from './Image';
// import LeftBlockBottom from './LeftBlockBottom';
import LeftBlockBottom from './LeftBlockBottom'

function LeftBlock() {
    return(
        <div className='LeftBlock'>
            <Image/>
            <LeftBlockBottom/>
        </div>
    )
}

export default LeftBlock
