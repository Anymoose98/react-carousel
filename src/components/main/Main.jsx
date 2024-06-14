import { useState } from "react"
import mainStyles from "./Main.module.scss"
import Accordion from "./Accordion"
import foto1 from '../../../src/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background.jpg'
import foto2 from '../../../src/assets/field-surrounded-by-rocks-covered-greenery-blue-sky-sunlight-italy.jpg'
import foto3 from '../../../src/assets/pretty-cloudscape.jpg'
import foto0 from '../../../src/assets/snowy-mountain-peak-starry-galaxy-majesty-generative-ai.jpg'

const Main = () => {
    const posts = [
        {
            title: "Il blu del cielo",
            image: `${foto3}`,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        },
        {
            title: "Universo e Terra ",
            image: `${foto0}`,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        },
        {
            title: "Tutti al mare",
            image: `${foto1}`,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",

        },
        {
            title: "Montagna e verde",
            image: `${foto2}`,
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        },

    ];
    return (
        <main class="container">
            <div class="row">
                <div className="col-12">
                    <div className={mainStyles.carousel}>
                        <Accordion items={posts} />
                    </div>
                </div>
            </div>

        </main>
    )
}


export default Main;