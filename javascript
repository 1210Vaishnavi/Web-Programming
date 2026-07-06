<html>
<head>
<title>Event Handling Example</title>
<style>
body{
font-family:Arail,sans-serif;
padding:20px;
}
button{
padding:10px 20px;
font-size:16px;
}
</style>
</head>
<body>
<h2>JavaScript Event Handling</h2>
<p id="message"></p>
<button id="myButton1">Welcome</button>
<button id="myButton2">Clear</button>
<script>
function changeText()
{
document.getElementById("message").textContent="Welcome to JavaScript Webpage";
}
document.getElementById("myButton1").addEventListener("click",changeText);
function clearText()
{
document.getElementById("message").textContent="";
}
document.getElementById("myButton2").addEventListener("click",clearText);
</script>
</body>
</html>

