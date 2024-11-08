import { Controller, Get, Param } from '@nestjs/common';

@Controller('prime')
export class PrimeController {
    @Get(':n')
    checkPrime(@Param('n') n: string){
        const num = parseInt(n, 10);
        if(isNaN(num) || num < 2){
            return { error: 'Please enter a valid number greater than 1'};
        }

        const isPrime = this.isPrime(num);
        return{isPrime: isPrime};
    }

    private isPrime(x: number): boolean{
        if(x <= 1) return false;
        if(x <= 3) return true;

        if(x % 2 === 0 || x % 3 === 0) return false;

        for (let i=5; i*i <=x; i += 6){
            if(x % i === 0 || x % (1 + 2) === 0) return false;
        }

        return true;
    }
}
