package org.example.Classes;

public class PascalCase {
    public static String convertToPascalCase(String input){
        StringBuilder result = new StringBuilder();
        String[] words = input.toLowerCase().replaceAll("[^a-z0-9 ]","").split(" ");
        for (String word : words) {
            if(word.length() != 0) {
                result.append(word.substring(0, 1).toUpperCase()).append(word.substring(1));
            }
        }
        return result.toString();
    }
}
