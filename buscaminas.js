function creartablero(){

    var filas=document.getElementById("nfilas").value;

    var dificultad=document.getElementById("dificultad").value;

    var tabla = document.getElementById("tablero");

    tablero = document.createElement('table');

    header = document.createElement('h2')

    tabla.appendChild(header)

    document.getElementsByTagName('h2')[0].innerHTML = "hay que desactivar "+dificultad*5+" minas"

    longitud = filas*filas

    posiciones = new Array()

    minas = new Array()

    longminas = 5*(dificultad)

    restantes=filas*filas-(dificultad*5)

    cont=0

    for (var i = 0; i <longitud ; i++) {
        posiciones.push(i)
    }

    for (var i = 0; i < longminas; i++) {
        aleatorio = Math.floor((Math.random() * (((posiciones.length-1)+1) )) + 0)
        minas.push(posiciones[aleatorio])
        posiciones.splice(aleatorio,1)

    }


    for (var i = 0; i < filas; i++) {

        var tr = document.createElement('tr');

        for (var j = 0; j < filas; j++) {


            var td = document.createElement('td');
            a =document.createElement("a");
            for (var k = 0; k < minas.length; k++) {
                b =(i)*filas+(cont)%filas

                if (minas[k]==b) {
                    a.setAttribute("name", "esmina")
                }
            }
            a.setAttribute("style", "background: url('casillasbuscaminas.jpg');padding-left: 55px;padding-right: 72px;padding-bottom: 56px;padding-top: 55px;")
            a.setAttribute("id", b)
            a.addEventListener("click",checkeo)
            a.addEventListener("contextmenu",banderita)
            a.setAttribute("onclick", "checkeo()")
            td.setAttribute("style", "width: 69px; height: 68px;padding-top:56px")
            td.appendChild(a)
            tr.appendChild(td)
            cont++
        }
        tablero.appendChild(tr)

    }

    tabla.appendChild(tablero)

}
function checkeo(){

    var dificultad=document.getElementById("dificultad").value;

    var filas=document.getElementById("nfilas").value;

    nminas=0

    if (this.name=="esmina"){
        this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +250px -5px;")

        hasperdido()
        alert('has perdido')

    }else{



        document.getElementById(this.id).removeEventListener("contextmenu",banderita);
        if((this.id)%filas<filas-1){
            if (document.getElementById((this.id)*1+1).name=="esmina"){
                nminas++
            }
        }
        if((this.id)%filas>0){

            if (document.getElementById((this.id)*1-1).name=="esmina"){
                nminas++
            }
        }

        if((this.id)>filas-1){
            if (document.getElementById((this.id)*1-filas).name=="esmina"){
                nminas++
            }
        }

        if((this.id)<filas*filas-filas){
            if (document.getElementById((this.id)-filas*(-1)).name=="esmina"){
                nminas++
            }
        }

        if ((this.id)%filas<filas-1 && (this.id)>filas-1) {
            if (document.getElementById((this.id)*1-filas+1).name=="esmina"){
                nminas++
            }

        }

        if ((this.id)%filas>0 && (this.id)>filas-1) {
            if (document.getElementById((this.id)*1-filas-1).name=="esmina"){
                nminas++
            }


        }

        if ((this.id)%filas<filas-1 && (this.id)<filas*filas-filas) {
            if (document.getElementById((this.id)-filas*(-1)+1).name=="esmina"){
                nminas++
            }

        }

        if ((this.id)%filas>0 && (this.id)<filas*filas-filas) {
            if (document.getElementById((this.id)-(filas-1)*(-1)).name=="esmina"){
                nminas++
            }


        }


        switch(nminas){
            case 0:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +126px 0;")
                break
            case 1:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: 0 +250px;")
                break
            case 2:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +375px +250px;")
                break
            case 3:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +250px +250px;")
                break
            case 4:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +126px +250px;")
                break
            case 5:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: 0 +500px;")
                break
            case 6:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +375px +500px;")
                break
            case 7:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +250px +500px;")
                break
            case 8:
                this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +126px +500px;")
                break

        }

        restantes=restantes-1

    }
    if (restantes==0) {
        alert("victoria!")
        hasperdido()
    }

}
function banderita(){
    event.preventDefault()
    this.setAttribute("style", "background: url('casillasbuscaminas.jpg'); padding-left: 55px;padding-right: 64px;padding-bottom: 48px;padding-top: 55px;background-position: +375px 0px;")
}

function hasperdido(){
    var filas=document.getElementById("nfilas").value;
    for (var i = 0; i < filas*filas; i++) {

        document.getElementById(i).removeEventListener("click", checkeo);
        document.getElementById(i).removeEventListener("contextmenu",banderita);
    }
}