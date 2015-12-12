(function() {
    'use strict';

    var lists = [
        {id: 'test', title: 'Тест'},
        {id: 'test1', title: 'Тест1'},
        {id: 'test2', title: 'Тест2'}
    ];

    var cards = {
        'test': [
            {
                "first_name": "Иван",
                "last_name": "Иванов",
                "age": "35",
                "city": "Москва",
                "avatar": "http://api.randomuser.me/portraits/men/1.jpg"
            },
            {
                "first_name": "Иван",
                "last_name": "Иванов",
                "age": "35",
                "city": "Москва",
                "avatar": "http://api.randomuser.me/portraits/men/1.jpg"
            }
        ],
        'test1': [
            {
                "first_name": "Иван",
                "last_name": "Иванов",
                "age": "35",
                "city": "Москва",
                "avatar": null
            }
        ]};

    var dashboard = $('#dashboard');

    _.forEach(lists, function(arr, key){
        createList(arr);
    });

    _.forEach(cards, function(arr, key){
        _.forEach(arr, function(arr2, k2){
            createCard(key, arr2);
        })

    });

    var ids = [];

    _.forEach(lists, function(arr, key){
        ids.push('#'+arr['id']+'-body');
    });

    $( ids.join(',') ).sortable({
        connectWith: ".connectedSortable"
    });

    function createList(elem){
        var rows = Math.round(12 / lists.length);
        var colValue = rows % 2 == 0 ? rows : (rows - 1);
        var element = $('<div class="list col-xs-' + colValue + '" id="' + elem['id'] + '"></div>');

        var rowFluid = $('<div class="row-fluid" id="' + elem['id'] + '-row"></div>');
        var row = $('<div class="row-fluid list-row" id="' + elem['id'] + '-row"></div>');
        var head = $('<div class="col-xs-12 list-head" id="' + elem['id'] + '-head">' + elem['title'] + '</div>');
        var body = $('<ul class="connectedSortable list-body col-xs-12" id="' + elem['id'] + '-body"></ul>');
        rowFluid.append(head);
        rowFluid.append(body);
        row.append(rowFluid);
        element.append(row);

        dashboard.append(element);
    }

    function createCard(key, data){
        var cardBody = $('#' + key + '-body');
        var card = $('<li class="card"></li>');
        var cardInfo = $('<div class="card-inf float-left"></div>');
        var first_name = $('<div class="card-first-name">' + data['first_name'] + '</div>');
        var last_name = $('<div class="card-last-name">' + data['last_name'] + '</div>');
        var age = $('<div class="card-age">' + data['age'] + '</div>');
        var city = $('<div class="card-city">' + data['city'] + '</div>');
        var avatarData = data['avatar'] == null ? "<div class='card-avatar float-left'><span>" +data['first_name'][0]+data['last_name'][0]+"</span></div>" : '<img class="card-image img-rounded float-left" src="' + data['avatar'] + '" />'
        var avatar = $('<div class="card-avatar float-left">' + avatarData + '</div>');


        cardInfo.append(first_name);
        cardInfo.append(last_name);
        cardInfo.append(city);
        cardInfo.append(age);

        card.append(avatar);
        card.append(cardInfo);

        cardBody.append(card);

    }

})();