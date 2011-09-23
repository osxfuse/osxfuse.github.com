function current_release_add_download_counter(response) {
    $(function() {
        $('<span class="download-counter">' + response.data.download_count + ' Downloads</span>').appendTo('#current-release-description')
    })
}
