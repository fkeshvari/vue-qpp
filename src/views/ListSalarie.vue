<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="list des client"/>            
        </div>
        <ListSalarie/>
    </div>
</template>

<script>
	import ListSalarie from '@/components/ListSalarie.vue'
	export default {
		components:{
			ListSalarie
		}
	};
</script>