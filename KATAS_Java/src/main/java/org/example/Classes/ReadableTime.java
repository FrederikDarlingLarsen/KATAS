package org.example.Classes;

public class ReadableTime {
    public static String readableTime(float time){
        float hours = time/3600;
        float minutes = (hours % 1) * 60;
        float seconds = (minutes % 1) * 60;
        return (int)hours + ":" + (int)minutes + ":" + (int)seconds;
    }
}
