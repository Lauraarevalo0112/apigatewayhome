<template>
<div class="todo">

<div class="cards-container">
    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2016/08/18/20/05/light-bulbs-1603766_960_720.jpg" 
        alt="Lampara"
    />

    <div class="product-info">
        <div>
            <p>$100.000</p>
            <p>Lámpara</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>



    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2021/03/22/11/40/bonsai-6114252_960_720.jpg" 
        alt="Planta"
    />

    <div class="product-info">
        <div>
            <p>$50.000</p>
            <p>Planta</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>




    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg" 
        alt="Sillon"
    />

    <div class="product-info">
        <div>
            <p>$150.000</p>
            <p>Sillon</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>


    
    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2018/01/28/04/17/relaxing-3112750_960_720.jpg" 
        alt="Sillon piscina"
    />

    <div class="product-info">
        <div>
            <p>$500.000</p>
            <p>Decoración piscina</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>



    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2019/09/10/06/09/beer-garden-4465321_960_720.jpg" 
        alt="Sillas de jardin"
    />

    <div class="product-info">
        <div>
            <p>$100.000</p>
            <p>Sillas de jardín</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>

    


    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2016/10/12/22/07/break-1736072_960_720.jpg" 
        alt="Almohada"
    />

    <div class="product-info">
        <div>
            <p>$30.000</p>
            <p>Almohada</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>





    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020_960_720.jpg" 
        alt="Cama doble"
    />

    <div class="product-info">
        <div>
            <p>$500.000</p>
            <p>Cama doble</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>




    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_960_720.jpg" 
        alt="Sillas de interior"
    />

    <div class="product-info">
        <div>
            <p>$30.000</p>
            <p>Silla de interior</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>


    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2015/08/16/04/00/pillows-890559_960_720.jpg" 
        alt="Cojines"
    />

    <div class="product-info">
        <div>
            <p>$30.000</p>
            <p>Cojines</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>


    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2019/02/10/22/17/imp-3988355_960_720.jpg" 
        alt="Decoracion de jardin"
    />

    <div class="product-info">
        <div>
            <p>$20.000</p>
            <p>Decoración de jardín</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>



    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2014/06/16/23/10/spices-370114_960_720.jpg" 
        alt="Cocina"
    />

    <div class="product-info">
        <div>
            <p>$100.000</p>
            <p>Indumentaria de cocina</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>




    <div class="product-card">
        <img src="https://cdn.pixabay.com/photo/2015/04/28/20/24/wood-744306_960_720.jpg" 
        alt="recipientes"
    />

    <div class="product-info">
        <div>
            <p>$50.000</p>
            <p>Recipientes de madera</p>
        </div>
        <figure>
        <img src="../assets/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
    </div>






</div>

</div>
</template>

<script>
import gql from "graphql-tag";

export default {
name: "Products",

data: function () {
    return {
    createTransaction: {
        usernameOrigin: localStorage.getItem("username"),
        usernameDestiny: "",
        value: "",
    },
    };
},

methods: {
    processTransaction: async function () {
    if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") == null
    ) {
        this.$emit("logOut");
        return;
    }

    localStorage.setItem("token_access", "");

    await this.$apollo
        .mutate({
        mutation: gql`
            mutation ($refresh: String!) {
            refreshToken(refresh: $refresh) {
                access
            }
            }
        `,
        variables: {
            refresh: localStorage.getItem("token_refresh"),
        },
        })
        .then((result) => {
        localStorage.setItem("token_access", result.data.refreshToken.access);
        })
        .catch((error) => {
        this.$emit("logOut");
        return;
        });

    await this.$apollo
        .mutate({
        mutation: gql`
            mutation ($transaction: TransactionInput!) {
            createTransaction(transaction: $transaction) {
                date
                id
                usernameDestiny
                usernameOrigin
                value
            }
            }
        `,
        variables: {
            transaction: this.createTransaction,
        },
        })
        .then((result) => {
        alert("Transacción Realizada de Manera Correcta, Revise Historial");
        })
        .catch((error) => {
        alert("Saldo Insuficiente o Destino Incorrecto");
        });
    },
},
};
</script>

<style>



.cards-container {

display: grid;

grid-template-columns: repeat(auto-fill, 350px);
gap: 20px;
place-content: fill;
padding: 150px 0 0 0;
background: center / cover no-repeat
    url(https://cdn.pixabay.com/photo/2015/12/19/02/12/texture-1099399_960_720.jpg);
padding-left: 1.%;
justify-content: center;

}
.product-card {
width: 250px;
background-color: rgb(235, 235, 235);
opacity: 0.90;
border-radius: 20px;
padding: 20px 20px;
margin: 5%;
justify-content: center;
align-content: center;
align-items: center;
align-self: center;
box-shadow: 10px 10px 5px rgba(214, 214, 214, 0.986);
}
.product-card img {
width: 240px;
height: 240px;
border-radius: 70px;
object-fit: cover;


}


.product-card img:hover {

    height: 90%;
    width: 90%;
    
}





.product-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 12px;
font-weight: bold;
}
.product-info figure {
margin: 0;
}
.product-info figure img {
width: 35px;
height: 35px;
}

.product-info div p:nth-child(1) {
font-weight: bold;
font-size: var(--md);
margin-top: 0;
margin-bottom: 4px;
}
.product-info div p:nth-child(2) {
font-size: var(--sm);
margin-top: 0;
margin-bottom: 0;
color: var(--hospital-green);
}
@media (max-width: 640px) {
.cards-container {
    grid-template-columns: repeat(auto-fill, 140px);
}
.product-card {
    width: 140px;
}
.product-card img {
    width: 140px;
    height: 140px;
}
}




</style>