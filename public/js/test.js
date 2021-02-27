// import './ecole.json
const ul = document.querySelector('.json')
// function fetchData() {
    
//     fetch('data.json').then(re => re.json().then(data => {
//         let test = Object.entries(data)
//         console.log(test);
//         for (let i = 0; i < 10; i++) {
//             console.log(test[i][1].fields.nom_de_l_etablissement);
//         }
//     }))
// }

const fetchData = async () => {
    fetch('data.json')
    .then(re => re.json()
    .then(data => {
        let arrData = Object.entries(data)
        console.log(data);

        // for (let i = 0; i < 100; i++) {
        //     if (arrData[i][1].fields.type_d_enseignement == "Secondaire ordinaire") {
        //         // console.log(`____ Ecole number ${i} ____`);
        //         // console.log(`Nom de l'etablissement : ${arrData[i][1].fields.nom_de_l_etablissement}`);
        //         // console.log(`Localité : ${arrData[i][1].fields.localite_de_l_implantation}`);
        //         // console.log(`Code Postal : ${arrData[i][1].fields.code_postal_du_p_o}`);
        //         // console.log(`Adresse : ${arrData[i][1].fields.adresse_de_l_etablissement}`);
        //         // console.log(`Type : : ${arrData[i][1].fields.type_d_enseignement}`);
        //         // console.log("________________________");   
        //         console.log(arrData[i][1])
        //     }
        // }


        const html = arrData.map( el => {
            if (el[1].fields.type_d_enseignement == "Secondaire ordinaire"){
                return `
                <div class="card">
                    <div class="card-body">
                            <!-- Date de publication de l'article-->
                            <div class="card-header">
                                ${el[1].fields.type_d_enseignement}
                            </div>
            
                            <!-- Titre de l'article -->
                            <div class="card-title">
                                <h3>${el[1].fields.nom_de_l_etablissement}</h3>
                            </div>
                            <!-- Extrait de l'article -->
                            <div class="card-excerpt">
                                <p>${el[1].fields.localite_de_l_implantation} </p>
                                <p>${el[1].fields.code_postal_du_p_o} </p>
                                <p>${el[1].fields.adresse_de_l_etablissement} </p>
                            </div>
                    </div>
                </div>
                `
            }
        }).join(" ")
        // console.log(html);
        document.querySelector('.row').innerHTML = html
        
    }))
}

fetchData();


