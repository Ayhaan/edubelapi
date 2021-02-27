let test = false
async function ecoleData() {
    let reponse = await fetch('ecole.json');
    let data = await reponse.json()
    
    // let arrData = Object.entries(data)
    console.log(data);

   
    allData(data)
    // searchData(arrData)
    

}
ecoleData()

// let tab = []
// console.log(tab);
//////////////// ALLDATA FUNCTION
// let i = 0
function allData(x) {
    const html = x.map( el => {
        if (el.fields.type_d_enseignement == "Secondaire ordinaire"){
            // tab.push(el.fields.adresse_de_l_etablissement)
            return `
                <div class="card">
                    <div class="card-body">
                            <!-- Date de publication de l'article-->
                            <div class="card-header">
                                ${el.fields.type_d_enseignement}
                            </div>
            
                            <!-- Titre de l'article -->
                            <div class="card-title">
                                <h3>${el.fields.nom_de_l_etablissement}</h3>
                            </div>
                            <!-- Extrait de l'article -->
                            <div class="card-excerpt">
                                <p>${el.fields.localite_de_l_implantation} </p>
                                <p>${el.fields.code_postal_du_p_o} </p>
                                <p>${el.fields.adresse_de_l_etablissement} </p>
                                
                            </div>
                    </div>
                </div>
            `
        }
    }).join(" ")
    // console.log(html);
    document.querySelector('.row').innerHTML = html
    // console.log(tab);
}


//////////////// SEARCHDATA FUNCTION
function searchData(x) {
    test == true
    let input = document.querySelector('#ecole')
    let btn = document.querySelector('.btn')
    btn.addEventListener('click', () => {
        x.filter( (el) => el.fields.nom_de_l_etablissement.includes(input.value))
        .map( (el) => {
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
                   <div class="card-body">
                            <!-- Date de publication de l'article-->
                            <div class="card-header">
                                ${el.fields.type_d_enseignement}
                            </div>
            
                            <!-- Titre de l'article -->
                            <div class="card-title">
                                <h3>${el.fields.nom_de_l_etablissement}</h3>
                            </div>
                            <!-- Extrait de l'article -->
                            <div class="card-excerpt">
                                <p>${el.fields.localite_de_l_implantation} </p>
                                <p>${el.fields.code_postal_du_p_o} </p>
                                <p>${el.fields.adresse_de_l_etablissement} </p>
                            </div>
                    </div>
            `
        console.log(div);
        document.querySelector('.row').appendChild(div)
        })
    })
}