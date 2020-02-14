// Builds the menu overlay by adding html code to the already created 'menuOverlay' element.
document.querySelector('footer').innerHTML += `
    <div class='footerInfo'>
        <h2>Hulda Kristjánsdóttir</h2>
        <h3>Sími - 661-8233</h3>
        <h3>hkj2@hi.is</h3>
    </div>
    <h4 id='copyright' class='copyright'></h4>
    
`

document.getElementById('copyright').innerHTML = '© ' + new Date().getFullYear() + ' Hulda ehf.'; 
