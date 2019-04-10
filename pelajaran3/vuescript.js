new Vue({
	el: "#app",
	data: {
		input: '',
		status: [
			{ text: 'status satu', like: false},
			{ text: 'status dua', like: false},
			//arahnya ke sini
		]
	},
	methods: {
		newStatus(){
			var status_baru = { text: this.input, like: false };
			this.status.push(status_baru);// untuk push
			this.input=''; // untuk bisa mengembaikan input jadi kosong
		},
		likeStatus(id){
			//this.status[id].like = true;// untuk memilih sesuatu sesuatu dengan id
			this.status[id].like = !this.status[id].like;// untuk memilih sesuatu sesuatu dengan id dan berbolak balik/ toogle
		}
	}
});