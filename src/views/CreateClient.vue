<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="créer un client"/>            
        </div>
        <CreateClient/>
    </div>
</template>

<script>
	import CreateClient from '@/components/CreateClient.vue'
	export default {
		components:{
			CreateClient
		}
	};
</script>