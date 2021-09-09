<template>
	<div class="users-list__header">
		<input type="checkbox" class="checkbox" name="all-users" id="all-users" />
		<div class="list-header__elements">
			<p class="list-header__el">Name</p>
			<p class="list-header__el">User Name</p>
			<p class="list-header__el">Email</p>
			<p class="list-header__el">Role(s)</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'ListHeader'
});
</script>

<style lang="scss" scoped>
.users-list__header {
	background: #f2f2f2;
	border-top: 1px solid #d4d4d4;
	border-bottom: 1px solid #d4d4d4;
	margin: auto;
	padding: 0.5rem;
	width: 90%;
	display: flex;
}
.checkbox {
	position: relative;
	top: 14px;
}
.list-header__elements {
	width: 80%;
	margin-left: 0.5rem;
	display: flex;
	justify-content: space-between;
}
.list-header__el {
	font-weight: bold;
	width: 10%;
	text-align: initial;
}
</style>
