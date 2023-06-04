$(function () {
  const checkedBoxes = {};
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      checkedBoxes[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedBoxes[$(this).data('id')];
    }
    console.log(checkedBoxes);
    if (Object.values(checkedBoxes).length > 0) {
      $('div.amenities > h4').text(Object.values(checkedBoxes).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
