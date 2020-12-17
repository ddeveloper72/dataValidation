$(document).ready(function(){

    // validate file type permitted for upload
    $('#file[type=file]').change(function(e) {
        var file = e.target.files[0]; 
        console.log('Name of file: ' + file.name); 
        // var filePath = (window.URL || window.webkitURL).createObjectURL(file);
        // console.log("✔ "+ filePath);

        
        
        // use regex to replace everything preceding and inclusive of the . in the file name
        var extension = file.name.replace(/^.*\./, "");
        
        console.log('File type: ' + extension);
        
        // parse the file name type to ensure it is excel or csv file format        
        if (extension == 'xls' || extension == 'xlsx' || extension == 'csv') {
            // console.log("processing " + extension + " file...");
            alert("processing " + extension + " file...")
            
            // try {
            //     localStorage.setItem("storageFiles", file.name) || {};
            //     localStorage.setItem("filePath", filePath);
            // }
            // catch (e) {
            //     console.log("saving to local storage failed: " + e);
            // }

        } else {
            // console.log("processing error... " + extension + " files are not supported!");
            alert("processing error... " + extension + " files are not supported!")
        }
    });
    
    // create table from csv file
    $('#load_data').click(function () {
        var reader = new FileReader();
        reader.onload = function(data) {
            // user regular expression to split csv rows
            var account_data = data.target.result.split(/\r?\n|\r/);
            // open table tag
            var table_data = '<table class="table">';
            for(var count = 0; count < account_data.length; count++) {
                // define the cell data by splitting each cell with the delimiter marker
                var cell_data = account_data[count].split(",");
                // print each row of data, incrementing to a new row per length of the cell data
                // open table row tag
                table_data += '<tr>';
                for(var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                    // identify the 1st row containing the table header
                    if(count === 0) {
                        table_data += '<th>' + cell_data[cell_count] + '</th>';
                    } else {
                        // any row not the 1st is the table data
                        table_data += '<td>' + cell_data[cell_count] + '</td>';
                    }
                }
                // close table row tag
                table_data += '</tr>';
            }
            // close table tag
            table_data += '</table>';
            $('#account_table').html(table_data);
        }
        reader.readAsText($("#file")[0].files[0]);
    });
});
