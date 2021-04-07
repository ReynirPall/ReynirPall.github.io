// Checks if page is being viewed on a smartphone and displays navbar accordinly. 
if(/Mobi/.test(navigator.userAgent)){

    // Changes the layout of the page to fit the smaller screen of the smartphone. 
    function changeToMobile(){
        document.getElementById('menuSoftware').setAttribute('href', '#about-us');
    }
    
    // Executes "changeToMobile" when the user_list has finished rendering.
    changeToMobile();
}