

const btnLogin = document.querySelector('#btnLogin');
const btnRegister = document.querySelector('#btnRegister');
const btnLR = document.querySelector('#btnLR');

const nombre = "Javier Flores"

if(btnLogin){
    btnLogin.addEventListener('click', () => {

        const bannerHTML = `
            <h1>Benvienido: ${nombre}</h1>
            <button class="btn btnBanner">Salir</button>
        `;

        // const bannerHTML = `
        // <div class="container" >
        //     <div class="row">
        //         <div class="col-12 col-md-3">Benvienido: ${nombre}</div>
                
        //     </div>
        //     <div class="row">
        //         <div class="col-12 col-md-6 col-lg">
        //             <button class="btn btnBanner">Salir</button> 
        //         </div>
        //     </div> 
        // </div>
        // `;

        const usuario = document.createElement("div");
        usuario.setAttribute("class", "banner pl-2 pr-2 my-lg-0")
        usuario.innerHTML = bannerHTML;
        
        // const user = document.createTextNode("<h1>gaaa</h1>")

        
        
        // usuario.appendChild(user)
        
        // const pruebaDiv = document.getElementById("prueba");
        // document.body.insertBefore(usuario, pruebaDiv)

        // const navegador = document.getElementById('navegacion') 
        // navegador.appendChild(usuario)

        const parentDiv = btnLR.parentNode;

        
        parentDiv.replaceChild(usuario, btnLR)

    


    });
}