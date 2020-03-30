/**
 * Script para controlar as funções do google maps
 * personalização e adição de markers
 * Autor: Bruno Salmito
 * Versão: 0.0.2
 */
function initMap() {
    // Define a lat e lng da cidade onde o mapa ficará centralizado
    var cidade = {
        lat: -3.721039, //Latitude da cidade
        lng: -40.991223 //Longitude da cidade
    };

    // Centraliza o mapa nas coordenadas da var cidade
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13,
            center: cidade,
            //Desabilita o scrool do mouse sobre o mapa
            scrollwheel: false,
            styles: [{
                stylers: [{
                    //Deixa o mapa branco
                    //saturation: -100
                }]
            }]

        }); //fim do construtor do mapa

    // função para adicionar marker no mapa
    function addMkarker(lat, lng, tit) {
        //var info = '<h1 id="firstHeading" class="firstHeading">Uluru</h1>';
        var info = tit;

        var myLatLng = {
            lat,
            lng
        };

        var infoWindow = new google.maps.InfoWindow({
            content: info
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            title: tit,
            map: map

        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });


    } //fim da função addMarker

    addMkarker(-3.7334475, -41.0025494, 'Bruno Salmito');


} //Fim da initMap
initMap();