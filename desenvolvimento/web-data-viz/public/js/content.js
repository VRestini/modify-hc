function exit(){
    limparSessao()
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