<?php

namespace App\Service;

class BaseService 
{
    public static function downloadData(string $jsonFile)
    {
        $filePath = '/var/www/html/back/public/assets/data/' . $jsonFile;

        $decodedData = json_decode(file_get_contents($filePath));
        
        if ($decodedData === null) return null;

        return $decodedData;
    }

    public static function generateSlug($string): string
    {
        $string = strtolower($string);
        $string = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $string);
        $string = str_replace(' ', '_', $string);
        $string = str_replace(',', '_', $string); // Remplace la virgule par un trait de soulignement
        $string = preg_replace('/[^a-z0-9_]/', '', $string);
        
        return $string;
    }
}