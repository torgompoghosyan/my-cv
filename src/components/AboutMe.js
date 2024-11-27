import './AboutMe.css';

function AboutMe() {
    return (
        <div className='AboutMe'>
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>ABOUT ME</h2>
            <p>Hi!</p>
            <p>I am 23 years old and passionate about web development. I have completed several courses in JavaScript and am currently deepening my knowledge of React. I have a strong foundation in HTML and CSS, and I am learning tools like Redux and Redux Toolkit for state management in applications.
                I enjoy coding and solving challenging problems, and I am always eager to learn new technologies and improve my skills. Although I don't have official work experience yet, I have created several projects that showcase my abilities, and you can explore them through the following links:
            </p>

            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='https://torgompoghosyan.github.io/tic-tac-toe/'>Tic-tac-toe</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='https://torgompoghosyan.github.io/country-game/'>Country Game</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='https://torgompoghosyan.github.io/calculator-js/'>Calculator Js</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='https://torgompoghosyan.github.io/translater/'>React translater</a>
                </li>
            </ul>

            <p>I am also working to improve my English skills.</p>
        </div>
    )
}

export default AboutMe