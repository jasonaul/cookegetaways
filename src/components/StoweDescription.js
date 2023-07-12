import React from 'react';
import './StoweDescription.css';
import image1 from '../images/stowe/directions.jpeg'
import image2 from '../images/stowe/information.jpeg'
import image3 from '../images/stowe/travel.jpeg'
import meadow from '../images/stowe/meadow.jpg'
import rail from '../images/stowe/rail.jpg'
import museum1 from '../images/stowe/museum1.jpeg'
import museum2 from '../images/stowe/museum2.jpg'
import outdoors1 from '../images/stowe/outdoors1.jpg'
import outdoors2 from '../images/stowe/outdoors2.jpg'

const images = [image1, image2, image3];


const StoweDescription = () => {
  return (
    
    <div className="stowe-description">
      <div className="paragraph-container">
        <div className="paragraph">
          <p>Stowe, Vermont, is a captivating destination that offers a delightful blend of natural beauty, outdoor adventures, and cultural charm. Nestled in the picturesque Green Mountains, Stowe attracts visitors year-round with its breathtaking landscapes and outdoor recreational opportunities. In the winter months, the town transforms into a winter wonderland, drawing ski enthusiasts from around the world to its renowned ski resorts. With its extensive trail network and pristine slopes, Stowe Mountain Resort and Smugglers' Notch Resort offer an exhilarating skiing and snowboarding experience for all skill levels.</p>
          <img className="description-image" src={meadow} onMouseOver={e => (e.currentTarget.src=rail)} onMouseOut={e => (e.currentTarget.src =meadow)} alt="description" />
        </div>
        <hr/>
        <div className="paragraph">
          <img className="description-image" src={museum1} onMouseOver={e => (e.currentTarget.src = museum2)} onMouseOut={e => (e.currentTarget.src = museum1)} alt="description" />
          <p>Beyond its winter allure, Stowe captivates visitors with its stunning fall foliage, making it a must-visit destination during the autumn season. The surrounding forests and mountains explode with vibrant hues of red, orange, and gold, creating a mesmerizing landscape. Travelers can explore the scenic byways, go hiking, or simply revel in the beauty of nature.</p>
        </div>
        <hr/>
        <div className="paragraph">
          <p>Aside from its natural attractions, Stowe boasts a charming village center lined with quaint shops, galleries, and inviting restaurants. Stroll along the idyllic streets, indulge in local cuisine, and discover unique handmade crafts. The town also offers cultural experiences such as the Vermont Ski and Snowboard Museum, which provides insights into the region's rich skiing heritage.</p>
          <img className="description-image" src={outdoors1} onMouseOver={e => (e.currentTarget.src = outdoors2)} onMouseOut={e => (e.currentTarget.src = outdoors1)} alt="description" />
        </div>
      </div>
      <div className="grid-container">
            {images.map((img, i) => (
                <div key={i} className="grid-item">
                    <a href="#0">
                        <img className="grid-image" src={img} alt={`description ${i+1}`} />
                        <h4>Link Text {i+1}</h4>
                    </a>
                </div>
            ))}
        </div>
    </div>
);
 
};

export default StoweDescription;
