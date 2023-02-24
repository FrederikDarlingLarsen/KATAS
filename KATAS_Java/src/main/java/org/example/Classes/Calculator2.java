package org.example.Classes;

public class Calculator2 {

    public static String addStrNums (String a, String b){

        int aNum;
        int bNum;

        try {

            if (!a.isEmpty()) {
                aNum = Integer.parseInt(a);
            } else {
                aNum = 0;
            }
            if (!b.isEmpty()) {
                bNum = Integer.parseInt(b);
            } else {
                bNum = 0;
            }

            return ""+(aNum+bNum);

        } catch(NumberFormatException e){

            return "-1";
        }


    }

}
