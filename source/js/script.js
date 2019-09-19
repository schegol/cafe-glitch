//map://

var mapInteractive = document.querySelector('#map');
if (mapInteractive) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.932741, 30.327253],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([59.932707, 30.327213], {
      hintContent: 'ул. Думская, д. 9',
      balloonContent: 'Cafe Glitch: ул. Думская, д. 9'
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/icon-marker-inverted.svg',
      iconImageSize: [60, 90],
      iconImageOffset: [-27, -95],
      iconContentOffset: [0, 0],
      iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects.add(myPlacemarkWithContent);
    myMap.controls.add('zoomControl');
  });
}
