function Contents(fileID, sHash, callback)
{
	$.ajax({
        type: "GET",
        url: server_url + "/customInstr.php",
        data: {SH: sHash, r0:"custom", r1:"contents", r2:fileID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}