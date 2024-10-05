import './Education.css';

function Education () {

    
    // let educationArr = [
    //     {
    //         edInst:'Yerevan State University',
    //         studyYear:"2019-2021",
    //         profession:'Radiophysics'
    //     },
    //     {
    //         edInst:'It Center',
    //         studyYear:"2024-2024",
    //         profession:'HTML, CSS, JavaScript, React JS'
    //     }
    // ]


    return (
        <div className='Education'>
            <div className="edName">
                <h3>Yerevan State University</h3>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2019-2021</h6>
                <p>Radiophysics</p>
            </div>
            <div className="edName">
                <h3>It Center</h3>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2024-2024</h6>
                <p>HTML, CSS, JavaScript, React JS</p>
            </div>
        </div>
    )
}


export default Education