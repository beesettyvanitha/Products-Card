function sumOfDigits(n)
{
    sum = 0;
    while(n >= 1)
    {
        a = Math.floor(n % 10);
        n =n/10;
        sum += a;
    }
    console.log(sum);
}

sumOfDigits(1234);