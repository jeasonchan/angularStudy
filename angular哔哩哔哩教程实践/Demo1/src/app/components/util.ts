export class Util {
    public static calculate(number1: number, number2: number, operator: string) {
        switch (operator) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;

        }

    }
}
