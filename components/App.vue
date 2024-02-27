<template>
	<h1>vue</h1>
	<btn></btn>
</template>

<script>
import btn from "./btn.vue"
export default{
	data(){
		return{
			msg:"hello vue"
		}	
	},
	components:{
		btn
	}
}
</script>