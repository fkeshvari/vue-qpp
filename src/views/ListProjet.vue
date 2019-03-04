<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="list des projets"/>            
        </div>
        <ListProjet/>
    </div>
</template>

<script>
	import ListProjet from '@/components/ListProjet.vue'
	export default {
		components:{
			ListProjet
		}
	};
</script>