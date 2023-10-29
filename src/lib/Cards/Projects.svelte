<script lang="ts">
    import ReactTerminal from '$lib/images/ReactTerminal.png'
    import NoteApp from '$lib/images/NoteApp.png'
    import Portfolio from '$lib/images/Portfolio.png'
    import ReactTS from '$lib/images/ReactTS.png'
    import TypingSpeed from '$lib/images/TypingSpeed.png'
    import SvelteFriend from '$lib/images/SvelteFriend.png'
    import ReactPos from '$lib/images/ReactPos.png'
    import NextZodiac from '$lib/images/NextZodiac.png'
    import IntersectionObserver from "svelte-intersection-observer";
    import { setCurrentMenu } from '../../routes/store';
    import Icon from '@iconify/svelte';
    let element:HTMLElement;
    let projects = [
        {
            title: "React POS",
            desc: "This is not a traditional pos with a bunch of table layout. I used clean component card layout ui. I implemented TanStack Query to that app with Supabase. I still maintaining this app as long as with my SvelteKit Friends app.",
            demo: "https://wyml-react-pos.vercel.app",
            github: "https://github.com/wyMinLwin/react-pos",
            image: ReactPos,
            tools: ["React","TanStack Query","Supabase","Redux Toolkit","TypeScript","Tailwind Css","PNPM","Vite"]
        },
        {
            title: "Next Zodiac",
            desc: "NextJS 13 SSG with framer motion. The project idea was from <a class='underline' href='/https://github.com/sannlynnhtun-coding/Zodiac/'>this repo<a/> and also I was willing to implement framer motion. So this is the result. ",
            demo: "https://zodiac-next.vercel.app/",
            github: "https://github.com/wyMinLwin/zodiac-next",
            image: NextZodiac,
            tools: ["Next","Framer Motion","PNPM","TypeScript","Tailwind Css"]
        },
        {
            title: "Svelte Friends",
            desc: "This is my SvelteKit app that I still maintaining. My goal about this project is to give seamless user experiences to users. I mainly focused on user interaction. The purpose of app is like tinder with in case of friends. Me and one of my coder friends about to collaborate in this project.",
            demo: "https://svelte-friends.vercel.app/login",
            github: "https://github.com/wyMinLwin/svelte-friends",
            image: SvelteFriend,
            tools: ["SvelteKit","TypeScript","Tailwind Css","PNPM"]
        },
        
        {
            title: "React Terminal",
            desc: "The idea of developing this app is really personal cause I really like to use terminal and CLI. I build the project with Vite As a first I started working on layout to get a clean layout. Since there was one page It was easy to create a layout. I used Redux Toolkit to store the history of command and write a bunch of straight forward JavaScirpt method to give a response to user. The major problem I faced with this projects are getting the history with the key storke and try to display that on the screen and think about how should the command typing work without using the HTML built-in Input tag.",
            demo: "https://wyminlwin-terminal-ts.netlify.app/",
            github: "https://github.com/wyMinLwin/terminal-react-ts",
            image: ReactTerminal,
            tools: ["React","TypeScript","Tailwind Css","Redux Toolkit","Vite"]
        },
        {
            title: "Typing Speed Test",
            desc: "As long as I remember this is my first React project with my own idea without any tutorial base. I used Bootstrap for theme. I used a JavaScript library to generate words. The most difficult problems were rendering out reactively which words are wrong or right. I was also about to add a virtual keyboard which would what keys you are typing. But due to render issues, I decide not to add cause I didn't know so much at those time.",
            demo: "https://wyminlwin-type.netlify.app/",
            github: "https://github.com/wyMinLwin/typing-speed",
            image: TypingSpeed,
            tools: ["React","JavaScript","Bootstrap"]
        },
        {
            title: "Note App",
            desc: "I created this web to train React. The idea was orginally came from a video about managing state in React and I started create this. I used React, Bootstrap, Sass a little bit and React router dom.",
            demo: "https://wyminlwin-dropnote.netlify.app/",
            github: "https://github.com/wyMinLwin/dropnote/",
            image: NoteApp,
            tools: ["React","Bootstrap","Sass",]
        },
        {
            title: "Portfolio v1",
            desc: "After I focused on React, I decided to write a portfolio with React. I didn't a bunch of research and create this portfolio.",
            demo: "https://wyminlwin.netlify.app/",
            github: "https://github.com/wyMinLwin/react-portfolio",
            image: Portfolio,
            tools: ["React","Bootstrap"]
        },
        {
            title: "Portfolio v2",
            desc: "The inspiration of this portfolio came from Dribble. I was about to help my friend to create a portfolio and suddenly I saw the layout like apple watch's UI and I thought what if I implement that kind of layout to portfolio with pop-up. And then I figured it out this is the result. ",
            demo: "https://wyminlwin-ts.netlify.app/",
            github: "https://github.com/wyMinLwin/terminal-react-ts",
            image: ReactTS,
            tools: ["React","TypeScript","Tailwind Css","Vite"]
        },
    ]
</script>

<IntersectionObserver
    {element}
    threshold={0.4}
    on:intersect={() => {setCurrentMenu("PROJECTS");}}
>
    <div 
        id="PROJECTS" bind:this={element} class="relative ">
        <div class=" flex flex-col justify-start py-16 items-start w-11/12 md:w-10/12 lg:w-3/4 mx-auto gap-y-5">
            <div class="font-bold text-text text-2xl">Projects</div>
            <div>I have done various of projects in my Github. But during past few several months I haven't focus on my own projects. And I was more focused on learning new things.</div>
            
            {#each projects as project (project.title) }
                <a href={project.demo} class="grid grid-cols-12 px-4 py-2 hover:bg-white/5 rounded-md project transition-all">
                    <div class="col-span-3">
                        <img class="w-full mb-auto rounded-md border-2 border-muted" src={project.image} alt="smt" />
                    </div>
                    <div class="col-span-9 px-4">
                        <div class="flex items-end">
                            <div class="mr-2 pj-name">{project.title}</div>
                            <span class="link-icon transition-all">
                                <Icon class="text-lg" icon="material-symbols:arrow-outward-rounded" />
                            </span>
                        </div>
                        <div class="text-sm my-2">{@html project.desc}</div>
                        <div class="flex justify-start items-center flex-wrap gap-2">
                            {#each project.tools as tool (tool) }
                                <span class="w-fit h-fit px-2 text-sm text-secondary rounded-full border-secondary" style="border:1px solid #55d4c2">{tool}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
            <div>
                But now I am about to re-foucs on my own projects. And If you want to me collaborate in your projects I would like to.
            </div>
        </div>
    </div>
</IntersectionObserver>

<style>
    .pj-name {
        color: #E2E8F0;
    }
    .project:hover .pj-name, .project:hover {
        color: #55d4c2 !important;
    }
    .project:hover .link-icon {
        margin-bottom: 4px;
        margin-left: 4px;
    }
</style>