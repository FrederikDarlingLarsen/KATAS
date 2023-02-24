package org.example;

import org.example.Classes.Calculator;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        String result = Calculator2.addStrNums("gt","32");

        String result2 = Calculator2.addStrNums("0","32");

        System.out.println(result);

        System.out.println(result2);
    }
}