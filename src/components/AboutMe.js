import './AboutMe.css';

function AboutMe() {
    return (
        <div className='AboutMe'>
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>ABOUT ME</h2>
            <p>Hello!</p>
            <p>I am 23 years old. I completed JavaScript courses and am currently learning React. I have a good knowledge of HTML and CSS and experience with Bootstrap. I enjoy coding and solving challenging problems, and I am always eager to learn new things. Although I do not have official work experience yet, I have created several projects that showcase my skills. You can view them at the following links:</p>

            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='https://torg777.github.io/tic-tac-toe/'>Tic-tac-toe</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href='https://torg777.github.io/country-game/'>Country Game</a>
                </li>
            </ul>

            <p>I am also working to improve my English skills.</p>
        </div>
    )
}

export default AboutMe