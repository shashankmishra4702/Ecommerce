// import React from 'react';
// import Link from 'next/link';

// import { urlFor } from '../lib/client';

// const HeroBanner = ({ heroBanner }) => {
//   return (
//     <div className="hero-banner-container">
//       <div>
//         <p className="beats-solo">{heroBanner.smallText}</p>
//         <h3>{heroBanner.midText}</h3>
//         <h1>{heroBanner.largeText1}</h1>
//         <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

//         <div>
//           <Link href={`/product/${heroBanner.product}`}>
//             <button type="button">{heroBanner.buttonText}</button>
//           </Link>
//           <div className="desc">
//             <h5>Description</h5>
//             <p>{heroBanner.desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroBanner


import React from 'react';
import Link from 'next/link';

// Import your local image
import heroBannerImage from '../public/assets/hero-banner-image.jpg'; // Update the path and filename as needed

const HeroBanner = () => {
  // Inline styles for the component
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center', // Center text and image
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    descContainer: {
      position: 'absolute',
      left: '0',
      padding: '20px',
      maxWidth: '400px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add background for better readability
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow for visual effect
    },
    buttonContainer: {
      marginTop: '20px', // Adjust spacing as needed
    },
    desc: {
      margin: '0',
    },
  };

  return (
    <div style={styles.container}>
      <p className="beats-solo">Hey There!</p>
      <h3>Thank you for your visit to</h3>
      <h1>SHOPIFY</h1>
      <img src={heroBannerImage.src} alt="headphones" style={styles.image} />

      <div style={styles.descContainer}>
        <div style={styles.desc}>
          
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <Link href={`/product/`}>
          <button type="button"></button>
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;

