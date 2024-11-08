import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {

    @Get(':n')
        getFibonacci(@Param('n') n: string){
            const num = parseInt(n, 10);
            if (isNaN(num) || num < 1){
                return {error: 'please enter a positive number'};
            }

            const fibonacciSequence = this.calculateFibonacci(num);
            return {sequence: fibonacciSequence};
        }

    private calculateFibonacci(n: number): number[] {
        const sequence: number[] = [0];
        if (n > 1) sequence.push(1);

        for (let i = 2; i < n; i++){
            sequence.push(sequence[i-1]+sequence[i-2]);
        }

        return sequence;
    }


}

