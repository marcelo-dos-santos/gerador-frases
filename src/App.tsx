import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "A vida é uma luta, mas a luta vale a pena.",
        "Comece onde você está, use o que você tem e faça o que você pode.",
        "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
        "Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.",
        "Não importa que você vá devagar, contanto que você não pare.",
        "Conhecer a si mesmo é o começo de toda sabedoria.",
      ],
    },
    {
      id: 2,
      nome: "Bem estar",
      frases: [
        "Se te faz sorrir, é porque te faz bem. Se te faz bem, não deixe escapar.",
        "A felicidade é um estado de espírito que se constrói a cada dia",
        "Faça o que te faz sentir bem, desde que não prejudique a ninguém.",
        "Procure o que te faz bem, o que lhe faz sorrir, o que lhe faz sonhar, não desistas de seus ideais.",
        "Fazer o bem faz bem, independentemente do reconhecimento. A solidariedade não comporta vaidades pessoais.",
        "A maturidade e o autoconhecimento me permite tantas coisas... Inclusive fazer o que me faz bem sem me preocupar com as opiniões alheias.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio]);
  }

  return (
    <div className="container">
      <img src={logoImg} alt="Logo frases" className="logo" />
      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            className="category-button"
            key={item.id}
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>
      <button className="button-frase" onClick={gerarFrase}>
        Gerar frase
      </button>
      {textoFrase !== "" && <p className="textoFrase">"{textoFrase}"</p>}
    </div>
  );
}

export default App;
