const postData = async (url, data) =>  {   //async указывает на выполнение асинхрнного кода        // функционал по общению с сервером
    let res = await fetch(url, {        //await ставится перед теми операциями которые нужно дождаться , и сам скрипт продолжит выполнятся    
       method: "POST",
       hreaders: {                               
           'Content-type': 'application/json'
       },
       body: data
    });

    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {getResource};

