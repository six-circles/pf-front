import { Rating } from "../..";
import styles from "./Details.module.scss";
import { DetailProd } from "../../../utils";

interface DetailsProps {
  detail: DetailProd;
}

function Details({ detail }: DetailsProps) {
  const prodChars = Object.entries(detail.moreCharacteristics);
  console.log(prodChars);

  return (
    <div className={styles.details}>
      <div className={styles.details_title}>
        <h2>{detail.title}</h2>
        <p>{detail.condition}</p>
        <div className={styles.details_rating}>
          {(detail.punctuations || detail.punctuations === 0) && (
            <Rating punctuation={detail.punctuations} />
          )}
          <p>({detail.comments?.length})</p>
        </div>
      </div>
      <div className={styles.price}>
        <h3>${detail.price}</h3>
      </div>
      <div className={styles.caracteristics}>
        <h3>Caracteristicas</h3>
        {prodChars.map((prop: any) => (
          <div key={prop[0]}>
            <strong>{prop[0]}</strong>
            <div style={{ display: "flex", gap: "1rem" }}>
              {prop[1].map((char: any) => (
                <p key={char}>{char}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <h3>Descripcion</h3>
        <p>{detail.description}</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.cant}>
          <input
            type="number"
            placeholder={`1 - ${detail.stock}`}
            min={1}
            max={detail.stock}
          />
          <button>Agregar al carrito</button>
        </div>
        <button className={styles.button_buy}>Comprar</button>
      </div>
    </div>
  );
}

export default Details;
