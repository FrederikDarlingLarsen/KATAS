package org.example.Classes;

public class Calculator {
    public static String basicCalculator(int numA, char operand, int numB) {
        String result = "";
        switch (operand) {
            case '+':
                result = "Result = " + (numA + numB);
            case '-':
                result = "Result = " + (numA - numB);
            case '*':
                result = "Result = " + (numA * numB);
            case '/':
                if (numB != 0) {
                    result = "Result = " + (numA / numB);
                } else {
                    result = "null (division by zero)";
                }
            default:
                if (operand != '+' && operand != '-' && operand != '*' && operand != '/') {
                    result = "null (invalid operator)";
                }
        }
        return result;
    }



    public static String extendedCalculator(String expression){

        expression = expression.replaceAll(" ", "");
        String o = expression.replaceAll("\\d+", "");

        char operand = o.charAt(0);

        String[] parts = expression.split("\\D");
        int numA = Integer.parseInt(parts[0]);
        int numB = Integer.parseInt(parts[1]);

        String result = "";


        switch (operand) {
            case '+':
                result = "Result = " + (numA + numB);
            case '-':
                result = "Result = " + (numA - numB);
            case '*':
                result = "Result = " + (numA * numB);
            case '/':
                if (numB != 0) {
                    result = "Result = " + (numA / numB);
                } else {
                    result = "null (division by zero)";
                }
            default:
                if (operand != '+' && operand != '-' && operand != '*' && operand != '/') {
                    result = "null (invalid operator)";
                }
        }

        return result;
    }
}
