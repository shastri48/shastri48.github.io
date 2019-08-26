<template>
    <div class="main">
        <!--background below the description-->
        <slot name="background"></slot>
        <!--/background below the description-->

        <!--Article-->
        <div class="articles">
            <div class="article">
                <h3>Articles</h3>
                <div class="article-list">
                    <div class="article-item" v-for="(article, index) in articles" :key="index">
                        <div class="box"></div>
                        <a class="article-title" :href="article.url" target="_blank">{{article.title}}</a>
                        <p class="article-description">{{article.description}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--/Article-->
    </div>
</template>

<script>
    export default {
        name: 'articles',
        data() {
            return {
                articles: [
                    {
                        title: 'Getting started with MongoDB',
                        url: 'https://medium.com/altcampus/getting-started-with-mongodb-12fcc9f08537',
                        description: 'MongoDB is and open-source document database and leading NoSQL database. ' +
                            'A powerful source that allows to reveal data using frontend and backend using API.'
                    },
                    {
                        title: 'What “new” keyword does?',
                        url: 'https://medium.com/altcampus/what-new-keyword-does-8c9c87eeae03',
                        description: 'As we know in JavaScript almost everything is an object. Even a function is an ' +
                            'object in JavaScript. The new keyword invokes a function in a special way and creates ' +
                            'a new empty object. But there is a difference between creating an Object with new keyword ' +
                            'and without new keyword.'
                    },
                    {
                        title: 'Making a Responsive Web Design',
                        url: 'https://medium.com/altcampus/making-a-responsive-web-design-3ee34b3ee63a',
                        description: 'Responsive web design is the practical way of building a website suitable ' +
                            'to work on every device and every screen size, no matter how large or small, mobile ' +
                            'or desktop. Website is built responsive by keeping in mind about every multimedia device users.'
                    },
                    {
                        title: 'Foundation of HTML:-Box Model',
                        url: 'https://medium.com/altcampus/foundation-of-html-box-model-2f6ce80a9934',
                        description: 'In the layout of a web page every tag is represented in form of boxes. ' +
                            'All the boxes are arranged together to give a proper desired layout to the web page. ' +
                            'These boxes are then fascinated to make it more attractive by adding colour to the ' +
                            'background. All these layouts are designed with the use of CSS(Cascading Stylesheet).' +
                            'background. All these layouts are designed with the use of CSS(Cascading Stylesheet).'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .articles {
        display: flex;
        justify-content: center;
        align-items: center;

        .article {
            position: relative;
            background: #FFFFFF;
            width: 80%;
            height: 80%;
            padding: 2rem;
            border-radius: 10px;

            h3 {
                font-size: 2rem;
                margin-bottom: 20px;
            }

            .article-list {
                padding-left: 40px;

                .article-item {
                    .box {
                        height: 15px;
                        width: 15px;
                        background: #94D1BE;
                        display: inline-block;
                        margin-right: 10px;
                        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                    }
                    .article-title {
                        position: relative;
                        font-size: 22px;
                        text-decoration: none;
                        color: black;
                        font-weight: bold;

                        &:before {
                            position: absolute;
                            content: '';
                            bottom: -5px;
                            height: 3px;
                            width: 80px;
                            background: linear-gradient(to right, #94D1BE, #DAF0EE, white);;
                        }
                    }

                    .article-description {
                        margin: 10px 0;
                        font-size: 16px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        line-height: 1.5em;
                        max-height: 3em;
                        width: 80%;
                        &::first-letter {
                            color: red;
                            font-size: 50px;
                        }
                    }
                }
            }
        }
    }
</style>
