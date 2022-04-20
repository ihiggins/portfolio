const Page3 = () => {

    return <div className="page page3">

<div className="content-wrap">
<div className='page-title'>About Me</div>


        <div className="box">
            <div className="box-column">

                <aside className='light-pane'>
                    <h2>Skills</h2>
                    <div className='tag-progress'>
                        <p>React  <span>10/10</span></p>
                        <progress className="progress" max="10" value="10"></progress>
                    </div>
                    <div className='tag-progress'>
                        <p>Node js <span>9/10</span></p>
                        <progress className="progress" max="10" value="9"></progress>
                    </div>
                    <div className='tag-progress'>
                        <p>Python <span>8/10</span></p>
                        <progress className="progress" max="10" value="8"></progress>
                    </div>
                    <div className='tag-progress'>
                        <p>SQL/NoSQL <span>9/10</span></p>
                        <progress className="progress" max="10" value="9"></progress>
                    </div>
                    <div className='tag-progress'>
                        <p>AWS <span>6/10</span></p>
                        <progress className="progress" max="10" value="6"></progress>
                    </div>


                </aside>
            </div>
            <div className="box-column">

                <aside className='light-pane'>
                    <h2>Education</h2>
                    <p>University of Massachusetts Boston </p>
                    <span>Information Technology</span>
                </aside>
                <aside className='light-pane'>
                    <h2>Bio</h2>
                    <p> Hi, I'm an aspiring Full Stack Developer </p>
                </aside>
            </div>
        </div>

        </div>

        <div className="waves">
            <svg id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path d="M0 348L120 441L240 326L360 235L480 383L600 353L720 280L840 361L960 393L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#0d1434"></path>
                <path d="M0 449L120 409L240 333L360 315L480 406L600 329L720 444L840 472L960 383L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#0e1943"></path>
                <path d="M0 364L120 443L240 423L360 454L480 406L600 444L720 464L840 422L960 374L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#0e1f52"></path>
                <path d="M0 505L120 473L240 474L360 469L480 477L600 515L720 454L840 433L960 484L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#0d2462"></path>
            </svg>
        </div>




    </div>

}


export default Page3;

