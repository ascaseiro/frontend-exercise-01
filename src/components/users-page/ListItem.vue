<template>
	<div class="user-list__item">
		<input type="checkbox" class="checkbox" name="user" id="user" />
		<div class="list-item__elements">
			<p class="list-item__el">{{ name }}</p>
			<p class="list-item__el">{{ userName }}</p>
			<p class="list-item__el">{{ email }}</p>
			<p class="list-item__el">{{ role }}</p>
			<font-awesome-icon class="edit-button" icon="pen-square" size="2x" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'ListItem',
	props: {
		name: {
			type: String
		},
		userName: {
			type: String
		},
		email: {
			type: String
		},
		role: {
			type: String
		}
	}
});
</script>

<style lang="scss" scoped>
.user-list__item {
	border-bottom: 1px solid #d4d4d4;
	margin: auto;
	padding: 0.5rem;
	width: 90%;
	border-radius: 2px;
	display: flex;
}
.checkbox {
	position: relative;
	top: 14px;
}
.list-item__elements {
	width: 100%;
	margin-left: 0.5rem;
	display: flex;
	justify-content: space-between;
}
.list-item__el {
	width: 100%;
	text-align: initial;
}
.edit-button {
	position: relative;
	top: 7px;
}

.edit-button:active {
	color: grey;
}
</style>
