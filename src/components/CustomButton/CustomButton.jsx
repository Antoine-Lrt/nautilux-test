import React from 'react';
import './style.scss';

function CustomButton({ text, type }) {
  //   return <button style={(styles.btnContainer, styles[`btn_${type}`])}>{text}</button>;

  return <button className={`button button--${type}`}>{text}</button>;
}

export default CustomButton;

// const styles = {
//   btn_PRIMARY: {
//     backgroundColor: '#FFD500',
//     fontSize: '.8em',
//     padding: '.5rem',
//     borderRadius: '5px',
//     marginRight: '1rem',
//     fontWeight: 'bold',
//     color: 'white',
//     border: 'none'
//   },

//   btn_PRIMARY: {
//     backgroundColor: '#FFD500',
//     fontSize: '.8em',
//     padding: '.5rem',
//     borderRadius: '5px',
//     marginRight: '1rem',
//     fontWeight: 'bold',
//     color: 'white',
//     border: 'none'
//   },

//   btn_SECONDARY: {
//     backgroundColor: 'transparent',
//     fontSize: '.8em',
//     padding: '.5rem',
//     borderRadius: '5px',
//     marginRight: '1rem',
//     color: 'gray',
//     fontWeight: 'bold',
//     borderSize: 1,
//     borderStyle: 'solid',
//     borderColor: 'gray'
//   }
// };

// style={[
//           styles.buttonContainer,
//           styles[`buttonContainer_${type}`],
//           width= {width},
//           height= {height},
//           bgColor ? {borderColor: bgColor, backgroundColor: null, borderWidth: 1} : {}
//           ]}
