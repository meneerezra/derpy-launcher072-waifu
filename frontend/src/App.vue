<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>

<div class="wrapper">

    <div class="topbar">
        <div class="text">
            <b>Library</b>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search for a game...">
        </div>
    </div>

    <div class="sidebar">
        <button id="home" class="sidebar-button" @click="test">
            <font-awesome-icon :icon="['fas', 'home']" class="sidebar-button-icon"/>
        </button>
        <button id="explore" class="sidebar-button">
            <font-awesome-icon :icon="['fas', 'earth-europe']" class="sidebar-button-icon"/>
        </button>
        <button id="download" class="sidebar-button">
            <font-awesome-icon :icon="['fas', 'download']" class="sidebar-button-icon"/>
        </button>
        <button id="settings" class="sidebar-button">
            <font-awesome-icon :icon="['fas', 'gear']" class="sidebar-button-icon"/>
        </button>
    </div>
</div>


</template>

<style scoped>

.topbar {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.sidebar-button-icon {
    font-size: 40px;
    color: white;
}
.sidebar-button-icon:hover {
    color: gray;
    cursor: pointer;
}
.sidebar-button:first-child {
    margin-top: 20px;
}

.sidebar-button:last-child  {
    margin-top: auto;
}

.sidebar-button {
    width: 60%;
    height: 70px;
    background: none;
    margin-bottom: 20px;
}

.sidebar {
    width: 75px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wrapper {
    height: 100vh;
    width: auto;
    background:
        linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
        ),
        url("assets/images/thumb-1920-1105920.png");
    background-position: bottom;
    display: flex;
    flex-direction: row-reverse;
}

</style>