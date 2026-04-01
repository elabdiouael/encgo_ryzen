package com.ryzenencg.ryzenencg.utils;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Converter
public class StringListConverter implements AttributeConverter<List<String>, String> {
    @Override
    public String convertToDatabaseColumn(List<String> list) {
        return (list != null && !list.isEmpty()) ? String.join(",", list) : "";
    }

    @Override
    public List<String> convertToEntityAttribute(String joined) {
        return (joined != null && !joined.isEmpty()) ? new ArrayList<>(Arrays.asList(joined.split(","))) : new ArrayList<>();
    }
}