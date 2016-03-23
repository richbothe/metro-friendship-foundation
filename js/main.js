/*$(window).load(function () {
    $('#eventsModal').modal('show');

    $('a.more-info').click(function() {
        $('#eventsModal').modal('hide');
    });
});*/

$(document).ready(function() {

	$('.navbar-nav li a').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	$('.panel').on('hidden.bs.collapse', function () {
		$(this).find('.panel-title i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	});
	$('.panel').on('shown.bs.collapse', function () {
		$(this).find('.panel-title i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	});
});