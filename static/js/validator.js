$(document).ready(function(){

    $('#file').change(function(e) {
        var file = e.target.files[0];
        
        console.log('Name of file: ' + file.name);    
        
        // use regex to replace everything preceding and inclusive of the . in the file name
        var extension = file.name.replace(/^.*\./, "");
        
        console.log('File type: ' + extension);
        
        // parse the file type to insure it is excel
        
        if (extension == 'xls' || extension == 'xlsx' || extension == 'csv') {
            console.log("processing excel file...");
        } else {
            console.log("processing error... file type not supported!");
        }
    });            
            
});