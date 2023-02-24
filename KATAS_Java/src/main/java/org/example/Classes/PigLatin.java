package org.example.Classes;

public class PigLatin {
    public static String translateWord(String word){
        //String result = "";
        char[] letters = word.toCharArray();
        List<Character> list = new ArrayList<>(
                Arrays.asList('a', 'e', 'i', 'o','u','A', 'E', 'I', 'O','U'));

        if(list.contains(word.charAt(0))){
            return word + "yay";
        }else{
            String firstLetters = "";
            int index = 0;
            for (char letter : letters){
                if(list.contains(letter)){
                    return word.substring(index)+firstLetters+"ay";
                }
                firstLetters += letter;
                index++;
            }
        }
        return "";
    }

    static String translateSentence(String sentence){
        String[] words = sentence.split(" ");
        String result ="";

        for(String word : words){
            result += translateWord(word) + " ";
        }
        return result;
    }

}
