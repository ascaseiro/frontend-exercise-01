import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		users: [
			{
				name: 'Jade Wolff',
				userName: 'Dariana76',
				email: 'Alia40@gmail.com',
				role: 'Admin'
			},
			{
				name: 'Donato Okunueva',
				userName: 'Cassidy89',
				email: 'Zakary_McCullough@yahoo.com',
				role: 'Admin'
			},
			{
				name: 'Lincon Yost PhD',
				userName: 'Jack25',
				email: 'Camille.Sporer@yahoo.com',
				role: 'Modeler'
			},
			{
				name: 'Monserrat Shanahan',
				userName: 'Casimer_Treutel16',
				email: 'RoyBradtke38@hotmail.com',
				role: 'Modeler, User'
			},
			{
				name: 'Ken Wyman',
				userName: 'Kathryn_Schmitt46',
				email: 'Laurine.Kub@hotmail.com',
				role: 'User'
			},
			{
				name: 'Mack Smith',
				userName: 'Alysson.Rosenbaum88',
				email: 'Zachary65@gmail.com',
				role: 'User'
			},
			{
				name: 'Shawn Streich',
				userName: 'Myriam_Goyette6',
				email: 'Maureen.Lakin@gmail.com',
				role: 'User'
			},
			{
				name: 'Rosanna Streich',
				userName: 'Peter24',
				email: 'Orville.Erdman6@yahoo.com',
				role: 'User'
			},
			{
				name: 'Emely Kuhlman II',
				userName: 'Melody_Cummings',
				email: 'Maxie.Hettinger76@yahoo.com',
				role: 'User'
			},
			{
				name: 'Shaina Barrows',
				userName: 'Earnest_Considine36',
				email: 'Sunny38@gmail.com',
				role: 'User'
			}
		]
	},
	mutations: {},
	actions: {},
	modules: {}
});
