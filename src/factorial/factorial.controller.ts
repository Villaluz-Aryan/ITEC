import { Controller, Get, Param } from '@nestjs/common';

@Controller('factorial')
export class FactorialController {

    @Get(':n')
        getFactorial(@Param('n') n: string){
            const num = parseInt(n, 10);
            if(isNaN(num) || num <= 1){
                return {error: 'Please enter a valid positive number'};
            }

            const factorial = this.calculateFactorial(num);
            return {factorial: factorial};
        }
        private calculateFactorial(n: number): number{
            if(n === 0 || n === 1) return 1;
            return n * this.calculateFactorial(n-1);
        }
        

}
