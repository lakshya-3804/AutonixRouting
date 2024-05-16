import "./SpareParts.css";
export default function TrendingCard(props) {
    
    return (
        <article class="card">
            <div class="card__img">
                <img src={props.srcImg} />
            </div>
            <div class="card__name">
                <p>{props.cardName}</p>
            </div>
            <div class="card__content">

                <div>
                    <span class="card__cont card__cont--before"><del>{props.priceBefore}</del></span>
                    <span class="card__cont card__cont--now">Starting @{props.priceAfter}</span>
                </div>

            </div>
        </article>
    )
}