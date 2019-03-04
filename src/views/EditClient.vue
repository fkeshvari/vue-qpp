<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="Changer le client"/>            
        </div>
        <EditClient/>
    </div>
</template>

<script>
	import EditClient from '@/components/EditClient.vue'
	export default {
		components:{
			EditClient
		}
	};
</script>