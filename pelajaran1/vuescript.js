var MyInput = {
	//kita membuat objek di sini
	template: `
		<div>
			<label>{{judul}} :</label>
			<input type="text" name="">
		</div>
	`,
	props: ['judul']
	//props: ['judul', '....'] untuk dua variabel
};

Vue.component('my-input', MyInput);//untuk mendaftarkan objek di atas

new Vue({
	el: '#app'// untuk membuat id dan nanti di panggil di index.html
});





var MyTugas ={// di dalam template harus di kurung dengan satu div besar, karena template tidak mau untuk 2 atau lebih text terpisah
	template:`
	<div>
	<div class="gambar"><img :src="gambar" style="width:200px;"></div>
	<div class="judul" >{{judul}}</div>
	<div class="HA" >{{ha}}</div>
	<div class="HSD" >{{hsd}}</div>
	<div class="stock" >{{stock}}</div>
	</div>
	`,
	props: ['gambar', 'judul', 'ha', 'hsd', 'stock']
};
Vue.component('my-tugas', MyTugas);
new Vue({
	el: '#tugas'
});