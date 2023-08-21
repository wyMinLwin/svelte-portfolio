<script>
    import Icon from "@iconify/svelte";
    import {currentMenu} from "./store"
    let menu = [
        {
            name:"About",
            value:"ABOUT"
        },
        {
            name:"Experiences",
            value:"EXPERIENCES"
        },
        {
            name:"Projects",
            value:"PROJECTS"
        },
    ] 
</script>

<content class="flex flex-col justify-start lg:justify-between items-start h-full py-16 w-10/12 lg:w-3/4 mx-auto">
    <div>
        <div class="text-3xl md:text-5xl font-bold font-main">Wai Yan Min Lwin</div>
        <div class="my-3 text:2xl md:text-3xl">Frontend Engineer</div>
        <div class="opacity-75">I build accessible, maintainable and digital experience for the web.</div>
        <div class="hidden lg:block mt-10">
            {#each menu as item (item.value) }
                <a 
                    href="#{item.value}"
                    class=" font-main flex uppercase justify-start items-center text-xs tracking-widest font-light"
                >
                    <hr class=" {$currentMenu === item.value ? 'w-28' : 'w-14'} transition-all mr-4 my-5" />
                    <div>{item.name}</div>  
                </a>
            {/each}    
        </div>
    </div>

    <div class="flex justify-start items-center mt-5 lg:mt-0 gap-x-4">
        <a href="https://github.com/wyMinLwin">
            <Icon class='text-3xl' icon="mdi:github"/>    
        </a> 
        <a href="https://www.linkedin.com/in/wyMinLwin/">
            <Icon class='text-3xl' icon="mdi:linkedin"/>    
        </a>
        <a href="https://www.instagram.com/inverted_niwl/">
            <Icon class='text-3xl' icon="mdi:instagram"/>    
        </a>
    </div>
</content>