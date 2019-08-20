<template>
    <div class="main">
        <!--background below the description-->
        <slot name="background"></slot>
        <!--/background below the description-->

        <!--details bar-->
        <div class="details-container">
            <div class="details">
                <img src="../assets/personal.jpg" alt="">
                <p class="detail-text">
                    Hi i am abhishek shastri. Full stack developer
                </p>
            </div>
        </div>
        <!--/details bar-->
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    .details-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .details {
            position: relative;
            background: #FFFFFF;
            width: 50%;
            height: 60%;
            padding: 2rem;
            border-radius: 10px;

            img {
                height: 250px;
                width: 250px;
                position: absolute;
                left: 50%;
                top: 0;
                transform: translate(-50%, -50%);
                border: 1rem solid #FFFFFF;
                border-radius: 50%;
            }

            .detail-text {
                padding-top: 100px;
                font-size: 26px;
                color: #3B413C;
            }
        }
    }
</style>
