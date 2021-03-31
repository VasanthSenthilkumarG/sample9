const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        
    <div class = "container">
        <h1 style="color: white ; background-color:dodgerblue; font-family: 'Times New Roman', Times, serif;text-align: center;" >Create Files and Folder</h1>
        <br>
        
        <table class="table  table-success table-hover">
            <thead >
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date Modified</th>
                <th scope="col">Type</th>
                <th scope="col">Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><i class="fa fa-file" aria-hidden="true">file</i></th>
                <td>3/30/2021 8:10AM</td>
                <td>file</td>
                <td>320kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-code-o" aria-hidden="true">sample1</i></th>
                <td>3/30/2021 8:10AM</td>
                <td>file</td>
                <td>453kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-video-o" aria-hidden="true">videoFile</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>video</td>
                <td>530Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-audio-o" aria-hidden="true">audioFile</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>audio</td>
                <td>23Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-archive-o" aria-hidden="true">archive</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>archive</td>
                <td>234kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-image-o" aria-hidden="true">image</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>image</td>
                <td>5Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-powerpoint-o" aria-hidden="true">powerPoint</i</th>
                <td >3/30/2021 8:10AM</td>
                <td>PPT</td>
                <td>23Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-excel-o" aria-hidden="true">excel</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>excel</td>
                <td>24Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-word-o" aria-hidden="true">word</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>word</td>
                <td>234kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-pdf-o" aria-hidden="true">pdf</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>pdf</td>
                <td>11Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-text" aria-hidden="true">text</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>text</td>
                <td>2Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-text-o" aria-hidden="true">text</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>text</td>
                <td>5Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-o" aria-hidden="true">file</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>file</td>
                <td>8Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-files-o" aria-hidden="true">files</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>files</td>
                <td>10Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-film" aria-hidden="true">film</i></th>
                <td>3/30/2021 8:10AM</td>
                <td>film</td>
                <td>234Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file" aria-hidden="true">file</i></th>
                <td>3/30/2021 8:10AM</td>
                <td>file</td>
                <td>320kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-code-o" aria-hidden="true">sample1</i></th>
                <td>3/30/2021 8:10AM</td>
                <td>file</td>
                <td>453kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-video-o" aria-hidden="true">videoFile</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>video</td>
                <td>530Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-audio-o" aria-hidden="true">audioFile</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>audio</td>
                <td>23Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-archive-o" aria-hidden="true">archive</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>archive</td>
                <td>234kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-image-o" aria-hidden="true">image</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>image</td>
                <td>5Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-powerpoint-o" aria-hidden="true">powerPoint</i</th>
                <td >3/30/2021 8:10AM</td>
                <td>PPT</td>
                <td>23Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-excel-o" aria-hidden="true">excel</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>excel</td>
                <td>24Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-word-o" aria-hidden="true">word</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>word</td>
                <td>234kb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-pdf-o" aria-hidden="true">pdf</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>pdf</td>
                <td>11Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-text" aria-hidden="true">text</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>text</td>
                <td>2Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-text-o" aria-hidden="true">text</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>text</td>
                <td>5Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-file-o" aria-hidden="true">file</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>file</td>
                <td>8Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-files-o" aria-hidden="true">files</i></th>
                <td >3/30/2021 8:10AM</td>
                <td>files</td>
                <td>10Mb</td>
              </tr>
              <tr>
                <th scope="row"><i class="fa fa-film" aria-hidden="true">film</i></th>
                <td>3/30/2021 8:10AM</td>
                <td>film</td>
                <td>234Mb</td>
              </tr>
              
            </tbody>
          </table>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    
        
    </body>
    </html>`)
})
app.listen(4000);
