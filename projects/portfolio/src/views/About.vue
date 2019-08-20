<template>
    <div class="main">
        <!--background below the description-->
        <slot name="background"></slot>
        <!--/background below the description-->

        <!--Skills-->
        <div class="about">
            <div class="experiences">
                <h2>Experience</h2>
            </div>
            <div class="experience">
                <h3>Drishti (Feb 2019 - Present)</h3>
                <ul>
                    <li>Full-Stack Engineer</li>
                    <li>Working mainly as Frontend developer. Worked on maintaining Drishti portal on AngularJs and
                        recreating with VueJs as well as data maintenance for recorded video.
                    </li>
                </ul>
            </div>
            <div class="experiences">
                <h2>Education</h2>
            </div>
            <div class="education">
                <h3>KK college of Engineering and Management(2014 - 2018)</h3>
                <ul>
                    <li>B.Tech(Computer Science)</li>
                    <li>Working mainly as Frontend developer. Worked on maintaining Drishti portal on AngularJs and
                        recreating with VueJs as well as data maintenance for recorded video.
                    </li>
                </ul>
                <h3>Sainik School Gopalganj(2006 - 2013)</h3>
                <ul>
                    <li>Intermediate</li>
                    <li>Computer science
                    </li>
                </ul>
            </div>
            <div class="experiences">
                <h2>Skills</h2>
            </div>
            <div class="skills">
                <div class="skill-image" v-for="skill in skills" :key="skill.name">
                    <img :src="skill.src" alt=""/>
                    <h5>{{skill.name}}</h5>
                </div>
            </div>
        </div>
        <!--/Skills-->
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
                skills: [
                    {
                        name: 'HTML',
                        src: 'https://image.flaticon.com/icons/svg/23/23735.svg'
                    },
                    {
                        name: 'CSS',
                        src: 'http://www.aztaleem.com/wp-content/uploads/2016/05/css-500x500-300x300.png'
                    },
                    {
                        name: 'ReactJS',
                        src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png'
                    },
                    {
                        name: 'VueJS',
                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
                    },
                    {
                        name: 'NodeJS',
                        src: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png'
                    },
                    {
                        name: 'MongoDB',
                        src: 'https://cdn.worldvectorlogo.com/logos/mongodb.svg'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .about {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #3B413C;

        .experience, .education, .skills {
            position: relative;
            background: #FFFFFF;
            margin-top: 10px;
            width: 80%;
            padding: 2rem;
            line-height: 1.7;
            border-radius: 10px;
        }

        .skills {
            background: transparent;
            display: grid;
            grid-template-columns: repeat(6, 1fr);

            .skill-image {
                text-align: center;

                img {
                    background: #9DB5B2;
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    padding: 20px;
                    height: 100px;
                    width: 50%;
                }

                h5 {
                    padding-top: 10px;
                    font-size: 16px;
                }
            }
        }

        .experiences {
            width: 80%;
            padding: 1rem;
        }
    }
</style>
