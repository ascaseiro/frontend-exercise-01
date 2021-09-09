<template>
	<div class="search-bar">
		<button id="add-user" @click="$emit('openIt')">
			+ Add User
			<font-awesome-icon class="add-icon" icon="angle-down" />
		</button>
		<input type="text" name="search" id="search" :placeholder="placeholder" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'SearchBar',
	data() {
		return {
			placeholder: '\uf0e0 Search...'
		};
	}
});
</script>

<style lang="scss" scoped>
.search-bar {
	background: #f2f2f2;
	border: 1px solid #d4d4d4;
	margin: 6rem auto;
	padding: 0.5rem;
	width: 90%;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
}
#add-user {
	color: white;
	background: #00adcc;
	padding: 0.5rem;
	border: none;
	border-radius: 2px;
}
.add-icon {
	margin-left: 2rem;
}
button {
	cursor: pointer;
}
</style>
