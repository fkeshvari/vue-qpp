<template lang="html">
    <header class="container">

        <div class="logo-wrapper text-center">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>

        <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item px-2">
                    <router-link to="/">Home</router-link>
                </li>
                 <li class="nav-item px-2">
                    <router-link to="/createClient">Créer un client</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/listClient">Liste des clients</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/createProjet">Créer un projet</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/listProjet">Liste des projets</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/createSalarie">Créer un salarie</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/listSalarie">Liste des salaries</router-link>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script>
export default {
};
</script>

<style lang="css">

.logo-wrapper img{
    max-width: 100px;
    padding: 40px 0;
}

.navbar a {
    color: lime;
    font-weight: bold;
    font-size: 16px;
}

</style>
