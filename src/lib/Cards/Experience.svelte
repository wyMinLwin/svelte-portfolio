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
        id="EXPERIENCES" bind:this={element} class="relative  text-dark-text ">
        <div class="flex flex-col justify-start pt-16 items-start w-11/12 md:w-10/12 lg:w-3/4 mx-auto gap-y-3">
            <div class="font-semibold text-2xl">My Experiences</div>
            {#each experiences as exp (exp.company) }
                <div class="grid grid-cols-12 w-full my-3 p-2 rounded-lg gap-x-2" style="border:1px solid #121212">
                    <div class="col-span-6 sm:col-span-4 grid grid-cols-3 text-xs mb-auto pt-1">
                        <div class="sm:text-end my-auto">{exp.startDate}</div>
                        <div class="w-2/3 bg-dark-text m-auto" style="height:1px"></div>
                        <div class="text-start my-auto">{exp.endDate}</div>
                    </div>
                    <div class="col-span-12 sm:col-span-8">
                        <div class="mb-2 flex justify-start items-center">
                            <div class="font-semibold">{exp.position}</div>
                            <Icon icon="mdi:circle-small" />
                            <div>{exp.company}</div>
                        </div>
                        <div class="mb-2 text-sm">{exp.desc}</div>
                        <div class="mb-2 flex justify-start items-center flex-wrap gap-2">
                            {#each exp.skills as skill (skill) }
                                <span class="w-fit h-fit px-2 text-dark-text text-sm rounded-full" style="border:1px solid #121212">{skill}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</IntersectionObserver>