<template>
	<div class="users-list">
		<list-header />
		<list-item
			v-for="user in $store.state.users"
			:key="user.name"
			:name="user.name"
			:userName="user.userName"
			:email="user.email"
			:role="user.role"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListHeader from './ListHeader.vue';
import ListItem from './ListItem.vue';

Component({
	components: {
		ListHeader,
		ListItem
	}
});
export default Vue.extend({
	components: { ListHeader, ListItem },
	name: 'UsersList'
});
</script>
