document.addEventListener("DOMContentLoaded", function () {
    const embeds = document.querySelectorAll('.wp-block-embed__wrapper iframe');

    embeds.forEach(embed => {
        const videoSrc = embed.getAttribute('src');
        if (videoSrc && videoSrc.includes('youtube.com')) {
            const videoId = videoSrc.split('/embed/')[1].split('?')[0];
            const wrapper = document.createElement('div');
            wrapper.className = 'youtube-wrapper';
            wrapper.setAttribute('data-video-id', videoId);

            const thumbnail = document.createElement('img');
            thumbnail.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            thumbnail.alt = "YouTube Thumbnail";

            const playButton = document.createElement('button');
            playButton.className = 'play-button';
            playButton.textContent = '▶';

            wrapper.appendChild(thumbnail);
            wrapper.appendChild(playButton);
            embed.parentElement.replaceWith(wrapper); // 기존 iframe 제거 후 썸네일 대체

            wrapper.addEventListener('click', () => {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                iframe.width = "560";
                iframe.height = "315";
                iframe.frameBorder = "0";
                iframe.allow = "autoplay; fullscreen";
                wrapper.innerHTML = ''; // 썸네일 제거
                wrapper.appendChild(iframe);
            });
        }
    });
});