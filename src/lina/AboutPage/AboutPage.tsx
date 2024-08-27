import NavBar from "../NavBar/NavBar";
import classes from "./AboutPage.module.css"

const AboutPage = () => {

    return (
        <span className={classes.AboutPage}>
            <div>
                <h1 id="about">About</h1>
                <span>
                    <h2>About this page</h2>
                    <p>Thanks for stopping by my portfolio website. I'm excited to have you here, even though things are still a little rough around the edges.</p>

                    <p><b>What's Going On?</b></p>
                    <p>You might have noticed that things look a bit sparse and not quite polished. That's because this site is currently under construction. But don't worry, this isn't a dead end – it's a work in progress.</p>

                    <p><b>Why Under Construction?</b></p>
                    <p>Building a digital portfolio takes time, and I'm striving to create something that truly represents my skills, experiences, and personality. I want to ensure that every detail aligns with my vision of showcasing my work and capabilities in the best way possible.</p>

                    <p><b>Behind the Scenes: The Tech Stack</b></p>
                    <p>Just so you know, this site is being crafted with some pretty cool technology. I'm using JavaScript and TypeScript to bring interactivity and functionality to the forefront. React, a popular JavaScript library, is the driving force behind the dynamic components you'll see here. And to add a touch of mesmerizing visuals, I've incorporated Vanta.js to create stunning background effects.</p>

                    <p><b>What to Expect</b></p>
                    <p>While I'm busy behind the scenes, here's what you can look forward to in the near future:</p>

                    <p>Projects Showcase: I'll be highlighting some of my best work with detailed descriptions, images, and, in some cases, live demos.</p>

                    <p>Blog: Keep an eye out for articles and posts on various topics related to web development, design, and technology.</p>

                    <p><b>Stay Tuned!</b></p>
                    <p>I'm working tirelessly to bring you a polished, informative, and visually engaging portfolio. In the meantime, feel free to explore what's available, and don't hesitate to get in touch if you have any questions or if you'd like to discuss a potential project.</p>
                    <p>I'm always up for a chat, collaboration, or just connecting with fellow enthusiasts. You'll find my contact information <a style={{ color: 'hotpink' }} href="/#contact">here.</a></p>

                    <p>Thanks for your understanding and patience as I put the finishing touches on this digital masterpiece. I can't wait to share it with you soon!</p>

                    <h3>Cheers,</h3>
                </span>

                <h2>About me</h2>
                <span>
                    <p>I'm Lina – a passionate front-end developer dedicated to crafting captivating digital experiences. With a solid foundation in HTML/CSS, Typescript and react from my education at Grit Academy (June 2023), I specialize in creating visually stunning and user-centric websites.</p>
                    <p>My approach to front-end development seamlessly blends creativity with code, resulting in visually appealing interfaces that prioritize user experience. I thrive on delivering designs and responsive layouts that align with modern web standards.</p>
                    <p>My education at Grit Academy has honed my skills while keeping me attuned to industry trends. This knowledge empowers me to transform concepts into engaging online experiences that resonate with users and clients.</p>
                    <p>Beyond coding, I explore digital trends and techniques to enhance user engagement. I'm excited to collaborate and bring digital visions to life.</p>
                    <p>Whether revamping your online presence or starting a new project, I'm here to create digital wonders with a lasting impact. Let's work together to turn ideas into exceptional digital realities.</p>
                    <p>Feel free to connect with me as we embark on this journey of crafting remarkable digital experiences together.</p>
                </span>
            </div>
        </span>
    );
}

export default AboutPage;