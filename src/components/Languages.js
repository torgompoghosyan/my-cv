import './Languages.css';

function Languages() {

    let lang = {
        engScale: 15,
        ruScale: 75,
        armScale: 100
    }

    return (
        <div className='Languages'>
            <h1 class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></h1>
            <p>English</p>

            <div className='English lang'>
                <div className='scale' style={{ width: lang.engScale + '%' }}>
                    <p>{lang.engScale + '%'} A1</p>
                </div>
            </div>
            <p>Russian</p>

            <div className='Russian lang'>
                <div className='scale' style={{ width: lang.ruScale + '%' }}>
                    <p>{lang.ruScale + '%'} B2</p>
                </div>
            </div>
            <p>Armenian</p>

            <div className='Armenian lang'>
                <div className='scale' style={{ width: lang.armScale + '%' }}>
                    <p>{lang.armScale + '%'} Native Language</p>
                </div>
            </div>
        </div>
    )
}


export default Languages