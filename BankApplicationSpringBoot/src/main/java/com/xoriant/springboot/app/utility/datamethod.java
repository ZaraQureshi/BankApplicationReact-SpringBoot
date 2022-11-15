package com.xoriant.springboot.app.utility;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;

public class datamethod {
	private final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
	 
	private final SimpleDateFormat DATE_TIME_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	 
	private java.sql.Date parseDate(String date) {
	    try {
	        return new Date(DATE_FORMAT.parse(date).getTime());
	    } catch (ParseException e) {
	        throw new IllegalArgumentException(e);
	    }
	}
	 
	private java.sql.Timestamp parseTimestamp(String timestamp) {
	    try {
	        return new Timestamp(DATE_TIME_FORMAT.parse(timestamp).getTime());
	    } catch (ParseException e) {
	        throw new IllegalArgumentException(e);
	    }
	}
}
