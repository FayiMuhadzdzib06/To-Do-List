// menyeleksi hasil input
function seleksi(){
    const kotakHI = document.querySelectorAll(".container #parentIsiInput .isi-input");
    const span = document.querySelectorAll(".isi-input span");
    const ceklis = document.querySelectorAll(".container #parentIsiInput .isi-input .done");
    for(let i = 0; i < kotakHI.length; i++){
        kotakHI[i].onclick = function(){
            // utk menampilkan ceklis
            ceklis[i].classList.toggle('ceklis');
            kotakHI[i].classList.toggle('isi-input-grid')
            // untuk mencoret teks
            span[i].classList.toggle('checked');
            kotakHI[i].classList.toggle('checkBG');
        };
    }
}
seleksi();

// bagian delete elemen
function del(){
    const kotakHI = document.querySelectorAll(".container #parentIsiInput .isi-input");
    const hapus = document.querySelectorAll(".container #parentIsiInput .isi-input .delete");
    for(let i = 0; i < hapus.length; i++){
        hapus[i].onclick = function(){
            kotakHI[i].style.display = 'none';
        }
    }
}
del();


document.getElementById('btn').onclick = function(){
    // tangkap dlu elemen htmlnya
    let input = document.getElementById('input').value;
    
    // bikin elemen baru div > span dan button
    // bikin div
    let NewDiv = document.createElement('div');
    // bikin div ceklis 
    let NewCeklis = document.createElement('div');
    NewCeklis.setAttribute('class', 'done');
    // bikin span dan isi spannya
    let NewSpan = document.createElement('span');
    let isiSpan = document.createTextNode(input);
    NewSpan.appendChild(isiSpan);
    // bikin buttonnya
    let NewBtnClose = document.createElement('button');
    let isiBtnClose = document.createTextNode('X');
    NewBtnClose.appendChild(isiBtnClose);
    NewBtnClose.setAttribute('class', 'delete');

    // masukiin span dan buttonya ke dalam div
    NewDiv.appendChild(NewCeklis);
    NewDiv.appendChild(NewSpan);
    NewDiv.appendChild(NewBtnClose);
    NewDiv.setAttribute('class', 'isi-input');

    // taro elemennya di dalam kotak + kasih alert kalo gak masukin apa" di kolom input
    if(input === ''){
        alert('Anda tidak memasukkan apa apa!!!');
    }else{
        document.getElementById('parentIsiInput').appendChild(NewDiv);
    }

    // taro function seleksiny
    seleksi();
    // taro function delnya
    del();
}
