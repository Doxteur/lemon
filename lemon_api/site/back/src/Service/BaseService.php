<?php

namespace App\Service;

class BaseService
{
    public static function downloadData($url)
    {
        $tempFilePath = 'assets/import/temp_data.json';

        $fileContent = file_get_contents($url);

        if ($fileContent === false) return false;

        $writeResult = file_put_contents($tempFilePath, $fileContent);

        if ($writeResult === false) return null;

        $decodedData = json_decode(file_get_contents($tempFilePath), true);
        
        if ($decodedData === null) return null;

        if (file_exists($tempFilePath)) {
            unlink($tempFilePath);
        }

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