<?php
$_SERVER['HTTP_ORIGIN']= "http://localhost:3000";
if($_SERVER['HTTP_ORIGIN'] == "http://localhost:3000") {
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    header('Content-type: application/json');
    //readfile('arunerDotNetResource.xml');

} else {
  header('Content-Type: text/html');
  echo "<html>";
  echo "<head>";
  echo "   <title>Another Resource</title>";
  echo "</head>";
  echo "<body>",
       "<p>This resource behaves two-fold:";
  echo "<ul>",
         "<li>If accessed from <code>http://localhost:3000</code> it returns an XML document</li>";
  echo   "<li>If accessed from any other origin including from simply typing in the URL into the browser's address bar,";
  echo   "you get this HTML document</li>",
       "</ul>",
     "</body>",
   "</html>";
}
 ?>
