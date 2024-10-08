var video = document.getElementById('my-video');
    var videoSrc = 'https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/de6c451e97394e6773f79fc6acc9caf8/manifest/video.m3u8';
    var isVideoPlayingAt1080p = false;

    

    // Load the video using HLS
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);

        // Event for manifest parsed
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            // Check if 1080p is available
            var levels = hls.levels;
            var is1080pAvailable = levels.some(level => level.height === 1080);
            if (is1080pAvailable) {
                // Set the desired quality to 1080p
                hls.currentLevel = levels.findIndex(level => level.height === 1080);
            }
        });

        // Event for level switched
        hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
            // Check if the video is playing at 1080p
            if (levels[data.level].height === 1080) {
                isVideoPlayingAt1080p = true;
                video.style.display = 'block'; // Show the video when it is 1080p
                video.play();
            }
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }


    window.addEventListener('load', function () {
        const params = new URLSearchParams(window.location.search);
        const selectedLang = params.get('lang');
    
        if (selectedLang === 'deutsch') {
            video.addEventListener('loadedmetadata', function () {
                var tracks = video.textTracks;
    
                // Automatically show the "Español" subtitle track
                for (var i = 0; i < tracks.length; i++) {
                    if (tracks[i].label === "Deutsch") {
                        tracks[i].mode = "showing"; // Show the Spanish subtitles
                    }
                }
            });
        }
    });


    window.addEventListener('load', function () {
        const params = new URLSearchParams(window.location.search);
        const selectedLang = params.get('lang');
    
        if (selectedLang === 'espanol') {
            video.addEventListener('loadedmetadata', function () {
                var tracks = video.textTracks;
    
                // Automatically show the "Español" subtitle track
                for (var i = 0; i < tracks.length; i++) {
                    if (tracks[i].label === "español") {
                        tracks[i].mode = "showing"; // Show the Spanish subtitles
                    }
                }
            });
        }
    });



    window.addEventListener('load', function () {
        const params = new URLSearchParams(window.location.search);
        const selectedLang = params.get('lang');
    
        if (selectedLang === 'romana') {
            video.addEventListener('loadedmetadata', function () {
                var tracks = video.textTracks;
    
                // Automatically show the "Español" subtitle track
                for (var i = 0; i < tracks.length; i++) {
                    if (tracks[i].label === "română") {
                        tracks[i].mode = "showing"; // Show the Spanish subtitles
                    }
                }
            });
        }
    });
