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

<div class="w-screen bg-main h-fit lg:h-screen lg:overflow-hidden relative text-muted">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div class="col-span-1 w-full lg:h-screen text-text" >
            <Info />
        </div>
        <div class="col-span-1 w-full lg:min-h-screen custom-pointer lg:overflow-y-scroll">
            <slot />
        </div>
    </div>
    <div 
        class="absolute {scale} {opacity ? 'lg:opacity-100 opacity-0' : 'opacity-0'} w-96 h-96 rounded-full blur-2xl z-10" 
        style="top:{$coords.y}px;left:{$coords.x}px;pointer-events:none;transform:translate(-50%,-50%);background-color: rgba(60, 60, 220, 0.1);"
    ></div>
</div>

<style>
    .scale {
        transition: all 100ms linear;
        transform: scale(1.5);
    }
</style>