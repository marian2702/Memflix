var video = document.getElementById('my-video');
    var videoSrc = 'https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/de6c451e97394e6773f79fc6acc9caf8/manifest/video.m3u8';

    // Load the video using HLS
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }




    const VideoBanner = document.getElementById('my-video'); // Ensure you have this video element in your HTML
    const muteButton = document.getElementById('muteButton');
    let isMuted = true; // Start muted by default

    // Initialize video muted state
    VideoBanner.muted = isMuted;

    // Mute/unmute functionality on button click
    muteButton.addEventListener('click', () => {
        isMuted = !isMuted; // Toggle mute state
        VideoBanner.muted = isMuted; // Mute or unmute the video

        // Update button icon based on the mute state
        if (isMuted) {
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Muted icon
        } else {
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // X mark icon for unmuted
        }
    });
   

   
   
   
