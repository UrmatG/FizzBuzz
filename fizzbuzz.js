var myNumber = 1;

for (; myNumber<=100; myNumber++) {
  if (myNumber % 3 == 0) {
    if (myNumber % 5 == 0) {
      document.write("FizzBuzz!<br>");
    } else {
        document.write("Fizz!<br>");
      }
  } else if (myNumber % 5 == 0) {
      document.write("Buzz!<br>");
    }
  else {
    document.write(myNumber+"<br>");
  }
}
