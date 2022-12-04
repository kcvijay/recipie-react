import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SingleRecipe.css";

function SingleRecipe() {
  return (
    <div className="recipe-wrapper">
      <img src="https://picsum.photos/1200/500" alt="illustration" />

      <div className="recipe-title">
        <p className="author-name">
          <div className="author-logo">V</div>
          <span>Vijay KC</span>
        </p>
        <h2>Italian Zucchini Pizza</h2>
      </div>
      <hr />
      <div className="description-table-wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          obcaecati quod unde facere in? Impedit asperiores mollitia quia earum
          officia. Accusantium cumque est quo ipsam qui aliquid, nobis atque
          blanditiis consectetur temporibus officia dolorum ex. Necessitatibus,
          inventore reiciendis molestias accusantium id nesciunt enim obcaecati,
          possimus esse, nisi sequi fuga quaerat.
        </p>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="recipe-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illum
        excepturi nisi beatae vel, facilis minus recusandae. Vitae et id
        repellendus facilis similique, temporibus accusamus repellat corrupti,
        exercitationem suscipit odio optio, porro dolorum? Nostrum, non.
        Deserunt, atque quod! Atque, corporis incidunt perferendis suscipit
        laboriosam veritatis temporibus quasi inventore repudiandae impedit
        ducimus pariatur fugit unde autem nesciunt tempore, expedita reiciendis
        ratione iure explicabo, iste necessitatibus voluptatem. Explicabo nobis
        voluptatem ullam minima, accusantium veritatis. Non laboriosam
        repellendus neque officia deserunt exercitationem corporis! Temporibus
        magnam blanditiis sequi, aspernatur ut soluta debitis ab sint molestiae
        magni voluptatibus autem nulla, fuga, dolorum similique repellat nisi
        assumenda? Officia, architecto perspiciatis numquam debitis, reiciendis,
        quibusdam sunt maxime perferendis nihil tempore quidem laborum!
        Corporis, deserunt atque! Obcaecati quaerat ad dolor quibusdam aliquid.
        Deserunt at esse reiciendis eius delectus magni impedit quo ad
        voluptate, amet fugiat velit provident? Provident voluptates in atque.
        Tempora nam excepturi maxime quaerat ut dolorum, quas eveniet commodi
        expedita dolorem temporibus repudiandae velit sed cupiditate, architecto
        eos. Sequi officia quis placeat aspernatur consequuntur corporis
        similique nesciunt dicta iusto, ducimus at suscipit, error temporibus
        facilis, beatae commodi modi veritatis. Culpa porro labore quas, dolor
        rem cupiditate magni nam distinctio sit cumque dolore? Ipsam cumque
        dicta dolores?
      </div>
      <Link to="/browseallrecipies" className="btnPurple">
        Back to Recipies
      </Link>
    </div>
  );
}

export default SingleRecipe;
