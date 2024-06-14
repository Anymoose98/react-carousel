import { useState } from "react";
import mainStyles from "./Main.module.scss"

export default function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Prendo la lunghezza dell'array
    const itemsCount = items.length;

    // In base alla lunghezza dell'array torna indietro
    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + itemsCount) % itemsCount);
    };

    // In base all'index sceglie la foto da mostrare
    const itemClick = (index) => {
        setCurrentIndex(index)
    }

    // In base alla lunghezza dell'array va avanti
    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % itemsCount);
    };

    // Mostro il file che ha lo stesso currentindex
    const { title, image, content } = items[currentIndex];

    return (
        <div>
            <figure>
                <img src={image} alt={title} className={mainStyles.img} />
            </figure>
            <div className="text-center">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="d-flex justify-content-between">
                <button onClick={prevItem} className={mainStyles.button}><i className="fa fa-arrow-left"></i></button>
                <div class="d-flex align-items-center">
                    {items.map((data, index) => (
                        <button
                            key={index}
                            onClick={() => itemClick(index)}
                            // cambio la classe in base a quale post è attivo
                            className={index === currentIndex ? mainStyles.circleClick : mainStyles.circle}>
                            <i className="fa-solid fa-circle mx-1"></i>
                        </button>
                    ))}
                </div>
                <button onClick={nextItem} className={mainStyles.button}><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
    );
}