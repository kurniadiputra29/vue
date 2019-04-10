new Vue({
	el: "#app",//buat id 
	data: {//buat objek
		judul: 'Latihan',
		isi: 'Praktek Vue',
		kondisi: 1 + 1 == 2,
		titles: [
			'Pencitraan Capres',
			'Tengku Wisnu',
			'Ujung Oppa Mualaf',
			'Si Nopal',
		] 

	},
	methods: {
		gantiJudul(){
			this.judul = "Belajar";
		}, //jangan lupa diberi koma
		gantiJudul1(value){
			this.judul = value;
		},
		gantiIsi(){
			this.isi = "Belajar Vue";
		}
	}	
});