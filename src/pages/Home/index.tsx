import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import Logo from '../../assets/Home/icon.png';
import Games from '../../assets/Home/games.png';


export default function Home() {

  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <main>
        <div>
          <div className={styles.action}>
            <h1>GoodBrowserGames</h1>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.games}>
            <img src={Logo} alt="Logo do GoodBrowserGames."></img>
          </div>
          <div className={styles.welcome}>
            <div>
              <h2>Bem-vindo ao GoodBrowserGames!</h2>
              <p>Deu uma pausa para respirar e quer aproveitar para jogar algo disponível na web, sem ter que instalar nada? Você está no lugar certo!</p>
              <p>Compartilhe conosco quais foram os browser games que você já jogou e gostou (e os que não gostou também) no passado, e nós iremos surpreendê-lo com nossas recomendações.</p>
              <div className={styles.buttons}>
                <button className="btn btn-primary" onClick={() => navigate('registro')}>Registrar!</button>
                <button className="btn btn-success" onClick={() => navigate('login')}>Fazer Login</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}