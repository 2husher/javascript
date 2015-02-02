function asc_args()
{
  alert(arguments.length);
  for(var i=0; i<arguments.length-1; i++)
  {
    if(arguments[i] > arguments[i+1]) return i+1;
  }
  return true;
}

var str = prompt("параметры", 0);

var args   = str.split(/\W+/);
var result = asc_args.apply(window, args);
document.write(result);