<script>
    import "../app.css"
    import { spring } from 'svelte/motion';
    import Info from "./Info.svelte";
    
    let coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.9
	});
	let scale = '';
    let opacity = true;
    let cursor = '';
</script>
<svelte:head>
    <title>Wai Yan Min Lwin</title>
</svelte:head>

<svelte:document
    on:mouseout={(e) => opacity=false}
    on:mouseover={(e) => opacity=true}
    on:mousemove={(e) => {
        coords.set({ x: e.clientX, y: e.clientY });
    }}
    on:mousedown={() => scale = 'scale'}
    
    on:mouseup={() => scale = ''}
/>

<div class="w-screen h-screen lg:overflow-hidden relative ">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div class="hidden lg:block col-span-1 bg-dark-main w-full lg:h-screen text-light-shade-2"
            role="presentation"    
            on:mouseenter={(e) => cursor='bg-white'}
        >
            <Info />
        </div>
        <div 
            class="col-span-1 w-full min-h-screen custom-pointer overflow-y-scroll"
            role="presentation"    
            on:mouseenter={(e) => cursor = 'bg-black'}
        >
            <div class="block lg:hidden col-span-1 bg-dark-main w-full h-fit text-light-shade-2">
                <Info />
            </div>
            <slot />
        </div>
    </div>
    <div 
        class="absolute {scale} {opacity ? 'lg:opacity-100 opacity-0' : 'opacity-0'} w-4 h-4 rounded-full {cursor}" 
        style="top:{$coords.y}px;left:{$coords.x}px;pointer-events:none"
    ></div>
</div>

<style>
    .scale {
        transition: all 100ms linear;
        transform: scale(1.5);
    }
    * {
        cursor: none;
    }
</style>