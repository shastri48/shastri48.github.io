<template>
    <div class="home">
        <Header :navigations="navigations"
                @navigationChange="navigationChange"
                :selectedNavigation="selectedNavigation">
        </Header>
        <component ref="personal"
                   :is="selectedNavigation">
            <template #background>
                <div class="background">
                    <div class="shading"></div>
                </div>
            </template>
        </component>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Home from './views/Home'
    import About from './views/About'
    import Projects from './views/Projects'
    import Contact from './views/Contact'
    import Articles from './views/Articles'

    export default {
        name: 'app',
        data() {
            return {
                navigations: ['Home', 'About', 'Projects', 'Articles', 'Contact'],
                selectedNavigation: 'Home'
            }
        },
        components: {
            Header,
            Home,
            About,
            Projects,
            Contact,
            Articles
        },
        methods: {
            navigationChange(value) {
                this.selectedNavigation = value;
                this.$router.push(value);
            }
        }
    }
</script>

<style lang="scss">
    .home {
        height: 100vh;
        width: 100%;

        .main {
            height: 100%;
            width: 100%;
            position: relative;
            background: #DAF0EE;

            .background {
                .shading {
                    width: 100%;
                    height: 50%;
                    background: #94D1BE;
                    border-radius: 0 0 30% 30%;
                }
            }

            & > div {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
