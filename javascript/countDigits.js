function PrintDigitsCount(n)
{
    count = 0;
    while(n >= 1)
    {
        n = Math.floor(n / 10);
        count++;
    }
    console.log(count);
}

PrintDigitsCount(455678);