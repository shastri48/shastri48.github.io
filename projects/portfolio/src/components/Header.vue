<template>
    <div class="header">
        <img src="../assets/logo.png" alt="logo">
        <nav class="navigation">
            <ul>
                <li v-for="navigation in navigations"
                    :key="navigation"
                    @click="$emit('navigationChange', navigation)"
                    :class="{selected : selectedNavigation == navigation}">
                    {{navigation}}
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['navigations', 'selectedNavigation']
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        background: #94D1BE;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid #3B413C;

        & > img {
            padding-left: 20px;
            height: 50px;
            width: 100px;
        }

        .heading {
            padding: 1rem;
            font-size: 40PX;
            color: #3B413C;
        }

        .navigation {
            padding: 1rem;

            ul {
                display: flex;

                li {
                    margin: 5px 20px;
                    padding: 5px;
                    list-style: none;
                    font-size: 16px;
                    cursor: pointer;
                    &.selected {
                        border-bottom: 2px solid #3B413C;
                    }
                }
            }
        }
    }
</style>
