function getData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let subject = document.getElementById('subject').value;
  let msg = document.getElementById('msg').value;

  //conditional
  if (name == '') {
    return alert('nama harus di isi');
  } else if (email == '') {
    return alert('email harus di isi');
  } else if (phone == '') {
    return alert('telpon harus di isi');
  } else if (subject == '') {
    return alert('pesan harus di isi');
  } else if (msg == '') {
    return alert('Pesan harus di isi');
  }

  const emailReceiver = 'muthmainnah133@gmail.com';

  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama saya ${name}, ${msg}, bisakah km menghubungiku di ${phone}`;
  a.click();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(msg);
}
// <a href=""></a>
