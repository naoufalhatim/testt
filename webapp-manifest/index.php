<?php

include_once '../fns/get_revisions.php';
$revisions = get_revisions();

header('Content-Type: application/x-web-app-manifest+json');

echo json_encode([
    'name' => 'Speedometer',
    'version' => '4.0',
    'description' => 'A GPS speedometer and tracker.',
    'launch_path' => '/run/',
    'appcache_path' => '/run/cache-manifest/',
    'developer' => [
        'name' => 'Qliavi Team',
        'url' => 'http://qliavi.com/',
    ],
    'icons' => [
        '16' => '/images/icons/16.png?'.$revisions['images/icons/16.png'],
        '32' => '/images/icons/32.png?'.$revisions['images/icons/32.png'],
        '64' => '/images/icons/64.png?'.$revisions['images/icons/64.png'],
        '90' => '/images/icons/90.png?'.$revisions['images/icons/90.png'],
        '120' => '/images/icons/120.png?'.$revisions['images/icons/120.png'],
        '128' => '/images/icons/128.png?'.$revisions['images/icons/128.png'],
        '256' => '/images/icons/256.png?'.$revisions['images/icons/256.png'],
        '512' => '/images/icons/512.png?'.$revisions['images/icons/512.png'],
    ],
    'permissions' => [
        'geolocation' => [
            'description' => 'Required to detect the speed and the current location of the user.',
        ],
    ],
]);
