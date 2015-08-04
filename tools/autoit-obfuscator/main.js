jQuery(document).ready(function($) {
    $('#selectAllBtn').click(function(event) {
        $('#source').select();
    });

    $('button[type="reset"]').click(function(event) {
        $('#source').focus();
    });
});

function obfuscate() {
    var code = $('#source').val(),
        btn = $('button[type="submit"]');

    if (code.length < 10)
        return;

    btn.button('loading');

    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        dataType: 'json',
        data: {
            source: $('#source').val()
        },
    })
        .done(function(json) {
            if (json.success) {
                var el = $('#source');
                el.val(json.code);
                
                // Scroll to bottom
                var textarea = document.getElementById('source');
                textarea.scrollTop = textarea.scrollHeight;
                
                // Select all for copy
                el.select();
            }
            else
                bootbox.alert('Failed. Please try again!');
        })
        .fail(function() {
            bootbox.alert('Error. Please try again!');
        })
        .always(function() {
            btn.button('reset');
        });

}