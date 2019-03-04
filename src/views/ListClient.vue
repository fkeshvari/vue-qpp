<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="list des clients"/>            
        </div>
        <ListClient/>
    </div>
</template>

<script>
	import ListClient from '@/components/ListClient.vue'
	export default {
		components:{
			ListClient
		}
	};
</script>