// Calculating Percentage Of Total Marks...../

var totalMarks = 600;

function calculate(maths,physics,chemistry,telugu,hindi,english)
{

    var sum = maths+physics+chemistry+telugu+hindi+english;

    //To Calculate Percentage = TotalSum/Total Number Of Marks*100....


    return sum/totalMarks*100;


}

var result = calculate(70,80,90,60,78,88)
console.log(result)


//To Print Even Or Odd Numbers...../


    var num = 9;

    //Here The modulo is the remainder So Any Number getting remainder zero is actually divisible by 2..

    if (num%2==0)
    {
console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }



//To Print Reverse String....../

function reverseString(str)
{

    //In JavaScript we dont have the built in keyword (reverse) So we first split the string into Array and the then we reverse it and then we join it...

    return str
    .split('')
    .reverse()
    .join('')
}

var resul = reverseString('hello')
console.log(resul);

