let submit = document.getElementById('submit');
if(submit != undefined){
    submit.onclick = (e)=>{
        e.preventDefault();
        openEmail();
    }
}

function openEmail(){
    let name = document.getElementById('name').value;
    let subject = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let text = document.getElementById('text').value;

    var form = document.createElement('form');
	
	//Set the form attributes 
	form.setAttribute('method', 'post');
	form.setAttribute('enctype', 'text/plain');
    form.setAttribute('action', 'mailto:' + encodeURIComponent('tar@tar.is') + '?Subject=' + encodeURIComponent(name + ' - ' + subject)
                      + '&Body=' + encodeURIComponent(text + '   - ' + name + ' - ' + phone));
	form.setAttribute('style', 'display:none');
	
	//Append the form to the body
	document.body.appendChild(form);
 
	//Submit the form
	form.submit();
	
	//Clean up
	document.body.removeChild(form);
}
