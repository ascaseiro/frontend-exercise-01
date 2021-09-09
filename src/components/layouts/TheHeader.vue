<template>
	<div class="nav-bar">
		<div class="nav-bar__links">
			<p class="client-logo">CLIENT-LOGO</p>
			<p class="toggle-button">USER MANAGEMENT</p>
		</div>
		<font-awesome-icon class="icon" icon="user-circle" size="2x" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'TheHeader'
});
</script>

<style lang="scss" scoped>
.nav-bar {
	background-color: black;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.nav-bar__links {
	display: flex;
	justify-content: space-between;
	min-width: 25%;
}
.client-logo {
	color: white;
	font-weight: bold;
	display: inline;
	margin: auto 1rem;
}
.toggle-button {
	color: white;
	display: inline;
	margin: auto 1rem;
}
.icon {
	color: white;
}
</style>
