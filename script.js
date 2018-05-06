$.ajax({
    url: 'https://raw.githubusercontent.com/carlosbvz/high_hopes_data/master/db.json',
    method: 'GET',
    }).done( data => {
        console.log(data);
    })