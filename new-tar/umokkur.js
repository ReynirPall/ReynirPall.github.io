let send_email_button = document.getElementById("send_email_button");
let name_in = document.getElementById("name_in");
let email_in = document.getElementById("email_in");
let phone_in = document.getElementById("phone_in");
let content_in = document.getElementById("content_in");



send_email_button.onclick = sendUserToMail;
function sendUserToMail(){
    send_email_button.setAttribute("href", "mailto:tarhugbunadur@gmail.com?&subject=" + name_in.value + "&body=" 
                                    + content_in.value + "  tölvupóstur: " + email_in.value + " Símanúmer: "  + phone_in.value)
}