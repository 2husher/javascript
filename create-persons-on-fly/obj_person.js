function Person()
{
  this.name    = "";
  this.surname = "";
  this.age     = "";
  this.print_row = function(){
                        document.write("<tr><td>" + this.name    + "</td>" +
                                           "<td>" + this.surname + "</td>" +
                                           "<td>" + this.age     + "</td></tr>");
                      }
  this.print_table = function(persons){
                        document.write("<table id='persons'>");
                        document.write("<tr><td>Имя</td><td>Фамилия</td><td>Возраст</td></tr>");
                        for(var i=0; i<persons.length; i++)
                        {
                          persons[i].print_row();
                        }
                        document.write("</table>");
                     }
}

var persons = [];

while(true)
{
  var name = prompt("Имя", ""); // возвращает 'null' или "" по умолчанию
  if ("" == name || 'null' == name) break;

  var surname = prompt("Фамилия", ""); // возвращает null или "" по умолчанию
  if ("" == surname || null == surname) break;

  var age = prompt("Возраст", "");
  if ("" == age || null == age) break;

  var p = new Person();

  p.name = name;
  p.surname = surname;
  p.age = age;

  persons.push(p);
}

var p = new Person();
p.print_table(persons);
