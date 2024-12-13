function printDigits(n)
{
    while(n >= 1)
    {
        console.log(n % 10);
        n = Math.floor(n / 10);
    }
}

printDigits(1234);

