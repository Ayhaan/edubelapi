let test = false
async function ecoleData() {
    let reponse = await fetch('school.json');
    let data = await reponse.json()
    
    console.log(data);


    allData(data)
    // searchData(arrData)
    

}
ecoleData()


function allData(x) {
    const html = x.map( el => {
        // if (el.fields.type_d_enseignement == "Secondaire ordinaire"){
            // tab.push(el.fields.adresse_de_l_etablissement)
            return `
                <div class="card">
                    <div class="card-body">
                            <!-- Date de publication de l'article-->
                            <div class="card-header">
                                
                            </div>
            
                            <!-- Titre de l'article -->
                            <div class="card-title">
                                <h3>${el.naam}</h3>
                            </div>
                            <!-- Extrait de l'article -->
                            <div class="card-excerpt">
                                <p>${el.adres} </p>
                                <p>${el.postcode} </p>
                                <p>${el.website} </p>
                                
                            </div>
                    </div>
                </div>
            `
        // }
    }).join(" ")
    // console.log(html);
    document.querySelector('.row').innerHTML = html
    // const html = x.map( el => {
    //     console.log(el.naam);
    // })
}