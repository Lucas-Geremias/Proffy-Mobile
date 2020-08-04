import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/44319767?s=460&u=95683c8df119fa2ee1bc1e8ae5f9334369cf6e0a&v=4" alt="Lucas Geremias" />
            <div>
                <strong>Lucas Geremias</strong>
                <span>Infórmatica</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias da infórmatica avançada.
        <br /><br />
        Apoixonado por todas as tecnologias e querendo sempre melhrar ao moximo o nivel
        </p>

    <footer>
        <p>
            Preço/Hora
            <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
    </footer>
    </article>
);
}
export default TeacherItem;