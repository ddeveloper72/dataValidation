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
            

            $('#import').click(function() {
            var reader = new FileReader();
            reader.onload = (e) => {
                // get rows into the array
                var theRows = e.target.result.split('\n');
                // console.log(theRows);
                // loop through each rows
                for (var row = 0; row < theRows.length; row++) {
                    // build new table row for validation
                    var nwRow = "";

                    // get the next columns into an array
                    var columns = theRows[row].split(",");
                    // get number of columns
                    var colCount = columns.length;
                    var newRow = "";
                    
                    if(colCount!=11) {
                        // incorrect number of columns => inject new row into the dom with notification
                        newRow = "<tr class='badrowcount'><td colspan='11'>Incorrect number of columns</td></tr>"
                    } else {
                        // test the data in the 1st column
                        newRow = "<tr><td>" + columns[0] + "</td><td>" + columns[1] + "</td><td>" + columns[2] + "</td><td>" + columns[3] + "</td><td>" + columns[4] + "</td><td>" + columns[5] + "</td><td>" + columns[6] + "</td><td>" + columns[7] + "</td><td>" + columns[8] + "</td><td>" + columns[9] + "</td><td>" + columns[10] + "</td></tr>";
                    }
                    $('#tableMain').append(newRow);
                }
            }
            reader.readAsText($('#file')[0].files[0]);
            alert("processing excel file...")
        });


        } else {
            console.log("processing error... file type not supported!");
            alert("processing error... file type not supported!")
        }
    });  
    
    
});