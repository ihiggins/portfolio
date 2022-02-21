const Page3 = () => {

    return <div className="page page3">

        <div className="box">
            <div className="box-column">
                <aside class='light-pane'>
                    <h2>About Me</h2>
                    <p> Hi, I am an Information Technology major at Umass Boston. But in
                        my spare time, I'm learning how to build web apps. I'm most
                        experienced with using a MERN stack to build applications, and I
                        am hoping to find an opportunity to challenge and expand my skill
                        set.{" "}</p>
                </aside>
                <aside class='light-pane'>

                    <h2>Skills</h2>
                    <div class='tag-progress'>
                        <p>React  <span>10/10</span></p>
                        <progress class="progress" max="10" value="10"></progress>
                    </div>
                    <div class='tag-progress'>
                        <p>Node js <span>9/10</span></p>
                        <progress class="progress" max="10" value="9"></progress>
                    </div>
                    <div class='tag-progress'>
                        <p>Python <span>8/10</span></p>
                        <progress class="progress" max="10" value="8"></progress>
                    </div>
                    <div class='tag-progress'>
                        <p>SQL/NoSQL <span>9/10</span></p>
                        <progress class="progress" max="10" value="9"></progress>
                    </div>
                    <div class='tag-progress'>
                        <p>AWS <span>6/10</span></p>
                        <progress class="progress" max="10" value="6"></progress>
                    </div>


                </aside>
            </div>
            <div className="box-column">

                <aside class='light-pane'>
                    <h2>Education</h2>
                    <p>University of Massachusetts Boston </p>
                    <span>GPA: 3.4</span>
                </aside>
                <aside class='light-pane'>
                    <h2>Social</h2>

                </aside>
            </div>
        </div>
    </div>

}


export default Page3;