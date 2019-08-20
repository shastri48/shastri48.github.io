<template>
    <div class="main">
        <!--background below the description-->
        <slot name="background"></slot>
        <!--/background below the description-->

        <!--Contacts-->
        <div class="contacts">
            <div class="contact">
                <h3>Get in touch</h3>
                <div class="contact-for">
                    <p>Use the form on right to drop me an email. Old-fashioned phone calls works too :-</p>
                    <h4><i class="fas fa-phone-alt"></i> +917903362291</h4>
                    <h3 class="place-living">Place where i live</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278.5276848752752!2d77.7159336836009!3d12.960106228825294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123b66f122eb%3A0x5629dec08375cc52!2sASK+Tower!5e0!3m2!1sen!2sin!4v1563019663099!5m2!1sen!2sin"
                            width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="contact-form">
                    <label>Name</label>
                    <input type="text" v-model="name" name="name">
                    <label>Email</label>
                    <input type="email" v-model="email" name="email">
                    <label>Query</label>
                    <textarea v-model="query" id="" cols="30" rows="10" name="query"></textarea>
                    <button @click="submitForm">Submit</button>
                </div>
                <!--footer-->
                <div class="footer-container">
                    <div class="footer">
                        <div class="footer-item" v-for="(link, index) in footerLinks" :key="index">
                            <a :href="link.url" target="_blank">
                                <i :class="link.class"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!--/footer-->
            </div>
        </div>
        <!--/Contacts-->
    </div>
</template>

<script>
    import jquery from 'jquery';

    export default {
        name: 'contact',
        data() {
            return {
                name: '',
                email: '',
                query: '',
                urlForContactForm: 'https://script.google.com/macros/s/AKfycbwAIuovBYNydDjAfZvyneHIIS43pfbu5f7BjH1m3zq1wR-RBUY/exec',
                contacts: [
                    {
                        gmail: 'mailto: shastri48@gmail.com'
                    },
                    {
                        linkedin: 'https://www.linkedin.com/in/shastri48'
                    },
                    {
                        github: 'https://github.com/shastri48'
                    },
                    {
                        twitter: 'https://twitter.com/abhisheknaaz'
                    }
                ],
                footerLinks: [
                    {
                        class: 'fab fa-twitter',
                        url: 'https://twitter.com/abhisheknaaz'
                    },
                    {
                        class: 'fab fa-github',
                        url: 'https://github.com/shastri48'
                    },
                    {
                        class: 'fab fa-linkedin-in',
                        url: 'https://www.linkedin.com/in/shastri48'
                    },
                    {
                        class: 'fab fa-medium-m',
                        url: 'https://medium.com/@shastri48'
                    }

                ]
            }
        },
        methods: {
            submitForm() {
                const {name, email, query, urlForContactForm} = this;
                jquery.ajax({
                    url: urlForContactForm,
                    method: 'GET',
                    dataType: 'json',
                    data: {'name': name, 'email': email, 'query': query}
                }).then(() => {
                    this.name = '';
                    this.email = '';
                    this.query = '';
                }).catch((e) => console.log(e))
            }
        }
    }
</script>

<style lang="scss">
    .contacts {
        display: flex;
        justify-content: center;

        .contact {
            position: relative;
            background: white;
            color: #3B413C;
            top: 10%;
            width: 50%;
            height: 75%;
            padding: 2rem;
            border-radius: 10px;

            h3 {
                font-size: 2rem;
            }

            .contact-for {
                float: left;
                width: 50%;
                padding: 0 10px;

                p {
                    margin-top: 20px;
                    font-size: 16px;
                    font-weight: bold;
                }

                .place-living {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 10px 0;
                    text-decoration: underline;
                }
            }

            .contact-form {
                width: 50%;
                float: right;

                input, textarea {
                    padding: 2px 4px;
                    outline: none;
                    display: block;
                    border: 1px solid black;
                    width: 100%;
                    height: 30px;
                    margin: 5px 0;
                    color: black;
                    border-radius: 4px;
                    background: #DAF0EE;
                }

                textarea {
                    height: 150px;
                    resize: none;
                }

                button {
                    margin-top: 10px;
                    padding: 8px 12px;
                    text-transform: uppercase;
                    border-radius: 4px;
                    background: #3B413C;
                    color: #DAF0EE;
                    float: right;
                    outline: none;
                }
            }

            .footer-container {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;

                .footer {
                    position: absolute;
                    padding: 20px 0;
                    text-align: center;
                    width: 100%;
                    bottom: 0;

                    .footer-item {
                        height: 3rem;
                        width: 3rem;
                        display: inline-block;
                        position: relative;
                        margin: 0 10px;
                        border: 2px solid #94D1BE;
                        border-radius: 50%;
                        a {
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            color: #94D1BE;
                            font-size: 2rem;
                            &:hover {
                                color: #74AD9A;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
