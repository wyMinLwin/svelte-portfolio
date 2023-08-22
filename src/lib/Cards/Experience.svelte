<script lang="ts">
    import Icon from '@iconify/svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    import { setCurrentMenu } from '../../routes/store';
    let experiences = [
        {
            company:"Foreign Company",
            position:"Frontend Developer",
            startDate:"Dec 2022",
            endDate:"Apr 2023",
            skills:["JavaScript","Tailwind","React","React Native","Next","Redux Toolkit"],
            desc: "Most of the things I created in this company is prototpyes. They wanted to create prototype version of video content platform app like Tiktok in React,React Native and Next."
        },
        {
            company:"InnoScript",
            position:"Frontend Developer",
            startDate:"Apr 2023",
            endDate:"Present",
            skills:["JavaScript","TypeScript","React","Tailwind","Redux Toolkit"],
            desc: "I have to develop the wireframe of UI into acutal web. I am at the team of POS and University Landing sites."
        },
        {
            company:"Thetys Myanmar",
            position:"Frontend Developer",
            startDate:"May 2023",
            endDate:"Present",
            skills:["JavaScript","Vue","VueX","Vuetify"],
            desc: "I have to maintain the project and adding more features by every release. I have to contribute the chatbot app with CSHTML from parent's company, Fusion Solution."
        },
        
    ];
    let element:HTMLElement;
</script>

<IntersectionObserver
    {element}
    threshold={0.7}
    on:intersect = {() => {setCurrentMenu('EXPERIENCES');}}
>
    <div 
        id="EXPERIENCES" bind:this={element} class="relative ">
        <div class="flex flex-col justify-start pt-16 items-start w-11/12 md:w-10/12 lg:w-3/4 mx-auto gap-y-5">
            <div class="font-semibold text-text text-2xl">My Experiences</div>
            {#each experiences as exp (exp.company) }
                <div class="grid grid-cols-12 w-full my-3 p-0 rounded-lg gap-x-2">
                    <div class="col-span-6 sm:col-span-4 grid grid-cols-3 text-xs mb-auto pt-1">
                        <div class="text-start my-auto">{exp.startDate}</div>
                        <div class="w-2/3 bg-muted m-auto" style="height:1px"></div>
                        <div class="text-start my-auto">{exp.endDate}</div>
                    </div>
                    <div class="col-span-12 sm:col-span-8">
                        <div class="mb-2 flex justify-start items-center text-text">
                            <div class="font-semibold">{exp.position}</div>
                            <Icon class="text-muted" icon="mdi:circle-small" />
                            <div>{exp.company}</div>
                        </div>
                        <div class="mb-2 text-sm">{exp.desc}</div>
                        <div class="mb-2 flex justify-start items-center flex-wrap gap-2">
                            {#each exp.skills as skill (skill) }
                                <span class="w-fit h-fit px-2 text-sm text-secondary rounded-full border-secondary" style="border:1px solid #55d4c2">{skill}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</IntersectionObserver>