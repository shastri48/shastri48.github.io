<template>
    <div class="main">
        <!--background below the description-->
        <slot name="background"></slot>
        <!--/background below the description-->

        <!--Projects-->
        <div class="projects">
            <div class="project">
                <h3>Projects</h3>
                <div class="project-list">
                    <div class="project-item" v-for="(project, index) in projects" :key="index">
                        <img :src="project.img" :alt="project.title">
                        <div class="project-title">
                            <a :href="project.url">{{project.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/Projects-->
    </div>
</template>

<script>
    export default {
        name: 'projects',
        data() {
            return {
                projects: [
                    {
                        img: require('@/assets/images/tictactoe.png'),
                        title: 'css',
                        url: '#'
                    },
                    {
                        img: require('@/assets/images/tictactoe.png'),
                        title: 'css',
                        url: '#'
                    },
                    {
                        img: require('@/assets/images/tictactoe.png'),
                        title: 'css',
                        url: '#'
                    },
                    {
                        img: require('@/assets/images/tictactoe.png'),
                        title: 'css',
                        url: '#'
                    },
                    {
                        img: require('@/assets/images/tictactoe.png'),
                        title: 'css',
                        url: '#'
                    },
                    {
                        img: require('@/assets/images/tictactoe.png'),
                        title: 'css',
                        url: '#'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .projects {
        display: flex;
        justify-content: center;
        align-items: center;

        .project {
            position: relative;
            background: #FFFFFF;
            width: 80%;
            height: 90%;
            padding: 2rem;
            border-radius: 10px;

            h3 {
                font-size: 2rem;
            }

            .project-list {
                display: grid;
                grid-gap: 20px;
                margin: 10px 0;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

                .project-item {
                    position: relative;
                    height: 250px;

                    img {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        border-radius: 8px;
                    }

                    .project-title {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        background: #8f8f8f;

                        &:hover {
                            opacity: 0.8;
                        }

                        a {
                            position: absolute;
                            font-size: 4rem;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            text-decoration: none;
                            color: black;
                        }
                    }
                }
            }
        }
    }
</style>
