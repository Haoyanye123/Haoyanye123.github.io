<hmtl>
<body>
<script>
var output = document.createElement('div');
document.body.appendChild(output);
var benchmark_1 = function(n){
  let a = [ ];
  let startTime = new Date().getTime();
  for(let i=0; i<n; i++){
    a.push(i);
}
let elapsedTime = new Date().getTime() - startTime;
output.innerHTML += '</br>'                +
                      'Array Length;: '    +
                              a.Length     +
                    '</br>'                +
                      'Elapsed Time: '     +
                              elapsedTime  +
                      ' milliseconds'      +
                    '</br>';
}
</script>
</body>
</html>
