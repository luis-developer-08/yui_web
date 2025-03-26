<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ✅ Dynamic Meta Tags -->
    <title inertia>{{ $title ?? config('app.name', 'Laravel') }}</title>
    <meta name="description" content="{{ $description ?? 'YUI: Laravel Installer for modern developers' }}">
    <meta name="keywords" content="{{ $keywords ?? 'Laravel, Installer, React, PHP, YUI' }}">
    <link rel="canonical" href="{{ url()->current() }}">
    <meta name="author" content="YUI Installer">

    <!-- ✅ Open Graph Meta Tags (for Facebook, LinkedIn) -->
    <meta property="og:title" content="{{ $title ?? config('app.name', 'Laravel') }}">
    <meta property="og:description" content="{{ $description ?? 'YUI: Laravel Installer for modern developers' }}">
    <meta property="og:image" content="{{ asset('images/yui.png') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">

    <!-- ✅ Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $title ?? config('app.name', 'Laravel') }}">
    <meta name="twitter:description" content="{{ $description ?? 'YUI: Laravel Installer for modern developers' }}">
    <meta name="twitter:image" content="{{ asset('images/yui.png') }}">

    <!-- ✅ Structured Data (Schema.org) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "{{ config('app.name', 'YUI Installer') }}",
        "image": "{{ asset('images/yui.png') }}",
        "url": "{{ url()->current() }}",
        "description": "{{ $description ?? 'YUI: Laravel Installer for modern developers' }}",
        "applicationCategory": "Developer Tool",
        "creator": {
            "@type": "Organization",
            "name": "YUI Installer"
        }
    }
    </script>

    <!-- ✅ Preconnect & Preload Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- ✅ Favicon -->
    <link rel="icon" type="image/png" href="{{ asset('images/yui.png') }}">

    <!-- ✅ Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    {{-- @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) --}}
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>
</html>
