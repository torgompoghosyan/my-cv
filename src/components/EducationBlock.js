import Education from './Education';
import './EducationBlock.css';

function EducationBlock() {


    return (
        <div className='EducationBlock'>
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            <Education />
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Skills</h2>

            <p>HTML / CSS / JavaScript / React JS / Redux / Reduc Toolkit / Git</p>

        </div>
    )
}


export default EducationBlock