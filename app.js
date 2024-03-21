document.write("<b>Q1-Print numbers from 0 to 10.</b> </br>");
document.write("</br>");

for (var i = 1; i <= 10; i++) {
  document.write(i + ", ");
}

document.write("</br>");
document.write("</br>");
document.write("<b>Q2-Print even numbers from 1 to 20.</b> </br>");
document.write("</br>");

for (var j = 1; j <= 20; j++) {
  if (j % 2 == 0) {
    document.write(j + ", ");
  }
}

document.write("</br>");
document.write("</br>");
document.write("<b>Q3-Print odd numbers from 1 to 15.</b> </br>");
document.write("</br>");

for (var k = 1; k <= 15; k++) {
  if (k % 2 != 0) {
    document.write(k + ", ");
  }
}

document.write("</br>");
document.write("</br>");
document.write("<b>Q4-Calculate and print the factorial of a number (lets say 5).</b> </br>");
document.write("</br>");

// var factorial_length = prompt('Enter factorial length');
var factorial_length = 5;
var factorial_Num = 1;

for (var l = 1; l <= factorial_length; l++) {
    factorial_Num = factorial_Num * l;
}
document.write(factorial_Num);



    document.write('</br>')
    document.write('</br>')
    document.write('<b>Q6-Print the multiplication table of a number (lets say 7) up to 10.</b> </br>')
    document.write('</br>')

    // var table_Num = prompt('Enter Any Number for multiplication table');
    var table_Num = 7;

for(var i = 1 ; i <= 10 ; i++){
    document.write(table_Num + ' X ' + i + ' = ' + i * table_Num + '</br>');
}

    document.write('</br>')
    document.write('</br>')
    document.write('<b>Q6-Print the Fibonacci series up to the 10th term.</b> </br>')
    document.write('</br>')
    document.write('</br>')
    document.write('Not Resolved')


    // var fibonacci_length = 10;
    // var fibonacci_Num = [];
    
    // for (var i = 1; i <= fibonacci_length; i++) {
    //     fibonacci_Num.push((i-1))
    //     fibonacci_Num[i] = fibonacci_Num[i] + fibonacci_Num[i-1]

    
    //     console.log(fibonacci_Num);  
    // }   
    document.write('</br>')
    document.write('</br>')
    document.write('<b>Q7-find and print the sum of digits of a number (lets say 123).</b> </br>')
    document.write('</br>')
    document.write('</br>')
    document.write('Not Resolved')

    // var sum_Num = [];
    // for(var i = 0; i <= 10; i++){
    //     var temp = sum_Num.push(i);
    //     sum_Num[temp + i] 
    // }
    // document.write(sum_Num)



 document.write('</br>')
    document.write('</br>')
    document.write('<b>Q8-Print the reverse of a string ' + '(lets say "hello").</b> </br>')
    document.write('</br>')

    for(var i = 10; i >= 1; i--){
    document.write(i + ' Hello.' + '</br>');

}

document.write('</br>')
document.write('</br>')
document.write('<b>Q9-Print the square of numbers from 1 to 10.</b> </br>')
document.write('</br>')

for(var i = 1; i <= 10 ; i++){
    document.write(i * i + '</br>');
}

document.write('</br>')
document.write('</br>')
document.write('<b>Q10-Print the largest element in an array (lets say [3, 7, 2, 9, 5]).</b> </br>')
document.write('</br>')

var find_Number = [3,9,2,7,5];
var largest_number = find_Number[0];

for(var i = 0 ; i <= find_Number.length ; i++){
    if(find_Number[i] > largest_number){
        largest_number = find_Number[i];
        document.write(largest_number);
    }
}
