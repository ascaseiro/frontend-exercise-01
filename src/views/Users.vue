<template>
	<div>
		<the-header />
		<search-bar @openIt="showDialog" />
		<users-list />
		<base-modal @close="hideDialog" :open="dialogIsVisible">
			<div class="form-header">
				<p class="form-title">NEW USER</p>
				<font-awesome-icon
					@click="hideDialog"
					class="edit-button"
					icon="times"
					size="2x"
					id="form-icon"
				/>
			</div>
			<div class="user-form">
				<label for="new-name" class="form-item">Name</label>
				<input
					type="text"
					name="name"
					id="new-name"
					class="form-item form-input"
				/>
				<label for="new-user-name" class="form-item">Name</label>
				<input
					type="text"
					name="name"
					id="new-user-name"
					class="form-item form-input"
				/>
				<label for="new-mail" class="form-item">Name</label>
				<input
					type="text"
					name="name"
					id="new-mail"
					class="form-item form-input"
				/>
				<label for="new-role" class="form-item">Role(s)</label>
				<select name="role" id="new-role" class="form-item form-input">
					<option value="Admin">Admin</option>
					<option value="Modeler">Modeler</option>
					<option value="User">User</option>
				</select>
			</div>
			<div class="form-buttons">
				<button @click="hideDialog" id="cancel-button">Cancel</button>
				<button @click="hideDialog" id="create-button">Create User</button>
			</div>
		</base-modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '../components/layouts/TheHeader.vue';
import SearchBar from '../components/users-page/SearchBar.vue';
import UsersList from '../components/users-page/UsersList.vue';
import BaseModal from '../components/users-page/BaseModal.vue';

Component({
	components: {
		TheHeader,
		SearchBar,
		UsersList,
		BaseModal
	}
});
export default Vue.extend({
	components: { TheHeader, SearchBar, UsersList, BaseModal },
	name: 'Users',
	data() {
		return {
			animatedBlock: false,
			dialogIsVisible: false,
			paraIsVisible: false
		};
	},
	methods: {
		showDialog() {
			this.dialogIsVisible = true;
		},
		hideDialog() {
			this.dialogIsVisible = false;
		}
	}
});
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
}
html {
	font-family: sans-serif;
}
body {
	margin: 0;
}
button {
	font: inherit;
	padding: 0.5rem 2rem;
	border-radius: 4px;
	color: white;
	cursor: pointer;
	border: none;
	width: 47%;
}
.animate {
	animation: slide-fade 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
	opacity: 0;
}

.fade-button-enter-active {
	transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
	transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
	opacity: 1;
}

@keyframes slide-scale {
	0% {
		transform: translateX(0) scale(1);
	}

	70% {
		transform: translateX(-120px) scale(1.1);
	}

	100% {
		transform: translateX(-150px) scale(1);
	}
}
.user-form {
	text-align: initial;
}
.form-header {
	width: 98%;
	display: flex;
	margin: auto;
	justify-content: space-between;
}
.form-title {
	font-weight: bold;
	font-size: 1.3rem;
}
#form-icon {
	margin-top: 1rem;
	cursor: pointer;
}
.form-item {
	display: block;
	margin: 0.5rem;
	color: #a9a9a9;
}
.form-input {
	width: 98%;
	margin: auto;
	padding: 0.5rem;
}
.form-buttons {
	width: 98%;
	display: flex;
	margin: auto;
	margin-top: 3rem;
	justify-content: space-between;
}
#cancel-button {
	background: black;
}
#create-button {
	background: #00adcc;
}
</style>
