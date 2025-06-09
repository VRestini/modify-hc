function exit() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
    Swal.fire({
        title: "Deseja deslogar?",
        background: '#1a1a1a',
        color: '#ffffff',
        showCancelButton: true,
        cancelButtonColor: "#ff0000",
        confirmButtonText: "Sim, desejo deslogar.",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#3a0175',
        timer: 5000
    }).then((result) => {
        if (result.isConfirmed) {
            limparSessao()
        }
    })
}
name_user.innerHTML = sessionStorage.NAME_USER.toUpperCase();
function popup(content){
    document.body.classList.add('blur-active');
    document.querySelector('.card-box-big').style.display = 'block';
    card_content_title.innerHTML = information[content].titulo
    card_content_body.innerHTML = information[content].corpo
}
function closePopup(){
    document.body.classList.remove('blur-active');
    document.querySelector('.card-box-big').style.display = 'none';
}