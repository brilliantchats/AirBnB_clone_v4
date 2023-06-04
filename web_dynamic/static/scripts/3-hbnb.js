$(function () {
  const checkedBoxes = {};
  const host = '0.0.0.0';
  /*
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
  */
  $.get(`http://${host}:5001/api/v1/status/`, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  /*
  $.ajax({
    type: 'POST',
    data: {},
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    contentType: 'application/json',
    success: function (data) {
      data.forEach(function () {
        let str = `<article><div class="title_box"><h2>${this.name}</h2>`;
        str = str + `<div class="price_by_night">${this.price_by_night}</div></div>`;
        if (this.max_guest !== 1) {
          str = str + `<div class="information"><div class="max_guest">${this.max_guest} Guests</div>`;
        } else {
          str = str + `<div class="information"><div class="max_guest">${this.max_guest} Guest</div>`;
        }
        if (this.number_rooms !== 1) {
          str = str + `<div class="number_rooms">${this.number_rooms} Bedrooms</div>`;
        } else {
          str = str + `<div class="number_rooms">${this.number_rooms} Bedroom</div>`;
        }
        if (this.number_bathrooms !== 1) {
          str = str + `<div class="number_bathrooms">${this.number_bathrooms} Bathrooms</div>`;
        } else {
          str = str + `<div class="number_bathrooms">${this.number_bathrooms} Bathroom</div></div>`;
        }
        str = str + '<div class="description">';
        $('section.place').html(str);
        $('section.place').text(this.description);
        $('section.place').html('</div></article>');
      });
    }
  });
  */
});
