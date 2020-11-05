<template>

    <!-- Header section -->
    <header class="header-section">
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 text-center text-lg-left">
                        <!-- logo -->
                        <a href="" class="site-logo">
                            <img src="/images/logo.png">
                        </a>
                    </div>
                    <div class="col-xl-6 col-lg-5">
                        <form class="header-search-form">
                            <input type="text" placeholder="Search on divisima ....">
                            <button><i class="flaticon-search">
                                    <b-icon icon="search"></b-icon>
                                </i></button>
                        </form>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="user-panel">
                            <div class="up-item">
                                <i class="flaticon-profile">
                                    <b-icon icon="person"></b-icon>
                                </i>
                                <a href="#">Sign</a> In or <a href="#">Create Account</a>
                            </div>
                            <div class="up-item">
                                <div class="shopping-card">
                                    <i class="flaticon-bag">
                                        <b-icon icon="handbag"></b-icon>
                                    </i>
                                    <span>0</span>
                                </div>
                                <a href="#">Shopping Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="main-navbar">
            <div class="container">

                <!-- menu -->
                <ul class="main-menu">
                    <li v-for="link of links" :key="link.title">
                        <router-link :to="link.href">{{ link.title }}</router-link>
                    </li>
                </ul>

            </div>
        </nav>
    </header>

    <!-- Header section end -->

</template>

<script>
	
    export default {
        data() {
            return {
                links: [{
                        title: "Home",
                        href: "/Home"
                    },
                    {
                        title: "Women",
                        href: "/Women"
                    },
                    {
                        title: "Men",
                        href: "/blog"
                    },
                    {
                        title: "Jewerly",
                        href: "/blog"
                    },
                    {
                        title: "Shoes",
                        href: "/blog"
                    },
                    {
                        title: "Pages",
                        href: "/blog"
                    },
                    {
                        title: "Blog",
                        href: "/blog"
                    }
                ]
            }
        }
    }

</script>
