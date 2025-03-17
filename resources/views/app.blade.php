<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="{{ config('app.name', 'Laravel') }}">
        <meta property="og:description" content="This kit is JavaScript-first, using JSX instead of TSX, making it accessible to developers who prefer plain JavaScript over TypeScript. It includes React 19, TailwindCSS 4, and Breeze for simple authentication and scaffolding.">
        <meta property="og:image" content="{{ asset('images/yui.png') }}">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:type" content="website">
        <meta name="twitter:card" content="summary_large_image">

        <!-- Twitter (X) Card (For Twitter) -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name', 'Laravel') }}">
        <meta name="twitter:description" content="This kit is JavaScript-first, using JSX instead of TSX, making it accessible to developers who prefer plain JavaScript over TypeScript. It includes React 19, TailwindCSS 4, and Breeze for simple authentication and scaffolding.">
        <meta name="twitter:image" content="{{ asset('images/yui.png') }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        {{-- @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) --}}
        @vite(['resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
