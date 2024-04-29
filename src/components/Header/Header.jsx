import headerImg from '../../assets/react-core-concepts.png';
import './Header.css'
const reactDesc=['Fundamental','Core','Important'];

function getRandomNumber(x) {
    return Math.floor(Math.random() * (x + 1));
}


function Header(){
    return(
      <header>
        <img src={headerImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDesc[getRandomNumber(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
          )
}
export default Header;
