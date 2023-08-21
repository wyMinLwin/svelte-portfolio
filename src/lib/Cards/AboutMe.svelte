<script lang="ts">
    import IntersectionObserver from "svelte-intersection-observer";
    import { setCurrentMenu } from "../../routes/store";
    let element:HTMLElement;
</script>
<IntersectionObserver
    {element}
    on:intersect = {() => setCurrentMenu("ABOUT")}
>
    <div
        id="ABOUT" bind:this={element} class="relative text-dark-text ">
        <div class=" flex flex-col justify-start pt-16 items-start w-11/12 md:w-10/12 lg:w-3/4 mx-auto gap-y-5">
            <div class="font-bold text-2xl">About Me</div>
            <div>
                <span class="font-semibold">Back in late 2020</span>, I found how to code in <span class="font-semibold">HTML</span>. Then I decided to learn more about programming. 
                At the start of the day, I didn't think to much and learned <span class="font-semibold">Python</span>.
                I knew I love programming and I decided not to University and then I learned web development.
                <span class="font-semibold">In June of 2022</span>, I focused Web development and started as Junior Frontend Developer <span class="font-semibold">at the end of 2023</span>.
            </div>
            <div>
                <div class="text-xl font-semibold mb-2">Technical</div>
                <div>
                    Since I chose to specialize in Frontend, I can use various of <span class="font-semibold">Javascript and TypeScript</span> library, framework and meta framework. 
                    I use <span class="font-semibold">React, Next, Vue, Svelte and SvelteKit</span>. I can also use some other technologies inside ecosystem like <span class="font-semibold">Redux Toolkit, TanStack Query</span> and so on.
                    I also have domain knowledge in Backend technology like <span class="font-semibold">C# and Dotnet</span>.
                </div>
            </div>
            <div>
                <div class="text-xl font-semibold mb-2">Personal</div>
                <div>
                    I like to work together around with the team. I always hold the key of a balance team. Personally active to help everyone around and always enthusiastic to keep in touch with new technology trends.
                </div>
            </div>
        </div>
    </div>
</IntersectionObserver>