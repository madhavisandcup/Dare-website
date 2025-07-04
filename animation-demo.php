<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .transition_wrapper {
            width: 100%;
            height: 100vh;
            position: sticky;
            top: 0;
        }

        .transition-flaps {
            margin-top: -70vh;
        }

        .transition_sticky {
            height: 200vh;
        }

        .transition-bands {
            /* position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden; */
            width: 100%;
            height: 8.333vh;
            position: absolute;
            overflow: hidden;
        }

        .transition-bands._12 {
            top: .004vh;
        }

        .transition-bands._11 {
            top: 8.337vh;
        }

        .transition-bands._10 {
            top: 16.67vh;
        }

        .transition-bands._9 {
            top: 25.003vh;
        }

        .transition-bands._8 {
            top: 33.336vh;
        }

        .transition-bands._7 {
            top: 41.669vh;
        }

        .transition-bands._6 {
            top: 50.002vh;
        }

        .transition-bands._5 {
            top: 58.335vh;
        }

        .transition-bands._4 {
            top: 66.668vh;
        }

        .transition-bands._3 {
            top: 75.001vh;
        }

        .transition-bands._2 {
            top: 83.334vh;
        }

        .transition-bands._1 {
            top: 91.667vh;
        }

        .band {
            /* width: 100%;
            height: 40px;
            background-color: black;
            margin-bottom: 10px;
            transition: all 0.5s ease; */
            height: 101%;
            position: relative;
            top: -.5%;
            background: white;
        }
    </style>
</head>

<body class="bg-black">
    <?php include 'header.php'; ?>
    <section class="vision-wrapper purpose sec-space bg-white">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h2 class="main-title apc-anim">Backed by<span class="apc-img-animate overflow-hidden position-relative d-inline-block"><span class="apc-imgs"><img src="images/apc-lg.svg" class="ap-01" alt="apc"><img src="images/apc-lg.svg" class="ap-02" alt="apc"></span></span><i class="pd_italic text_green">Vision<span class="text_green">,</span></i> Driven by <i class="pd_italic text_green">Purpose</i><span class="dot-animated text_green"><span class="pulse-animate"><span class="pulse_dot"></span></span></span></h2>
                </div>
                <div class="col-md-5">
                    <p class="vision-desc">Oluwadare is not on this journey alone - he's backed by the All Progressives Congress (APC), a driving force for national progress.</p>
                    <p class="vision-desc">With APC’s core values of people-centered leadership, inclusive development, and structural reform, Dare champions a bold agenda focused on education reform, youth inclusion, digital access, and job creation - uniting purpose with action.</p>
                </div>
            </div>
        </div>
    </section>
    <div class="transition-flaps">
        <div class="transition_sticky">
            <div class="transition_wrapper">
                <div class="transition-bands _12">
                    <div class="band"></div>
                </div>
                <div class="transition-bands _11">
                    <div class="band"></div>
                </div>
                <div class="transition-bands _10">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _9">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _8">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _7">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _6">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _5">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _4">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _3">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _2">
                    <div class="band"></div>
                </div>

                <div class="transition-bands _1">
                    <div class="band"></div>
                </div>

            </div>
        </div>
    </div>
    <?php include 'testimonial-grid.php'; ?>

    <?php include 'footer.php'; ?>

    <script>
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".band").forEach((band, i) => {
            // Set static styles before animation begins
            gsap.set(band, {
                willChange: "transform",
                transformStyle: "preserve-3d",
                transform: "translate3d(0px, 101%, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            });

            // Then animate
            gsap.to(band, {
                transform: "translate3d(0px, 0%, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: band,
                    start: "top bottom-=100",
                    end: "top center",
                    scrub: true,
                }
            });
        });
    </script>

</body>

</html>