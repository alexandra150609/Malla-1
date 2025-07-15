const frasesMotivadoras = [
  "🎉 ¡Felicidades! Has completado el Ciclo {ciclo}. Cada paso te acerca más a tu meta.",
  "✨ ¡Gran trabajo! Estás construyendo el futuro profesional que soñaste.",
  "📚 ¡Un ciclo más superado! Tu esfuerzo está dando frutos.",
  "🧠 ¡Ciclo {ciclo} completado con éxito! Sigue adelante, lo estás haciendo increíble.",
  "🚀 ¡Vas con todo! Ya estás más cerca de convertirte en profesional de la salud.",
  "💪 ¡Muy bien! Cada ciclo aprobado es una prueba de tu determinación.",
  "🌈 ¡Ciclo completo! Nunca subestimes el poder de avanzar paso a paso.",
  "🔬 ¡Excelente! Has dominado otro nivel en tu formación como tecnóloga médica.",
  "🏁 ¡Otro ciclo más! Vas marcando tu camino con constancia.",
  "🎓 ¡Bravo! Has conquistado el Ciclo {ciclo}. ¡Sigue brillando!"
];

const malla = {
  1: [
    { id: "tecnicas", nombre: "Técnicas básicas en atención de salud", requisitos: [] },
    { id: "quimica1", nombre: "Elementos de química", requisitos: [] },
    { id: "mate", nombre: "Matemáticas básicas", requisitos: [] },
    { id: "intro", nombre: "Introducción a laboratorio clínico y anatomía patológica", requisitos: [] },
    { id: "filo", nombre: "Filosofía y ética", requisitos: [] },
    { id: "desarrollo", nombre: "Desarrollo personal y autonomía", requisitos: [] },
    { id: "com1", nombre: "Comunicación y redacción I", requisitos: [] },
    { id: "ingles1", nombre: "Inglés 1", requisitos: [] }
  ],
  2: [
    { id: "org", nombre: "Fundamentos de química orgánica", requisitos: ["quimica1"] },
    { id: "biologia", nombre: "Biología general", requisitos: [] },
    { id: "fisica", nombre: "Física básica", requisitos: ["mate"] },
    { id: "com2", nombre: "Comunicación y redacción II", requisitos: ["com1"] },
    { id: "cultura", nombre: "Cultura ambiental y desarrollo sostenible", requisitos: [] },
    { id: "pensamiento", nombre: "Pensamiento científico e investigador", requisitos: [] },
    { id: "sociales", nombre: "Ciencias Sociales en el contexto actual", requisitos: [] },
    { id: "ingles2", nombre: "Inglés 2", requisitos: ["ingles1"] }
  ],
  3: [
    { id: "morfo", nombre: "Fundamentos de morfofisiología", requisitos: ["biologia", "org"] },
    { id: "equipos", nombre: "Diseño, seguridad y automatización en equipos de laboratorio clínico", requisitos: [] },
    { id: "electiva1", nombre: "Asignatura electiva I", requisitos: [] },
    { id: "actividad1", nombre: "Actividad complementaria I", requisitos: [] },
    { id: "ingles3", nombre: "Inglés 3", requisitos: ["ingles2"] }
  ],
  4: [
    { id: "estadistica", nombre: "Estadística", requisitos: ["mate"] },
    { id: "fisio", nombre: "Fisiopatología general", requisitos: ["morfo"] },
    { id: "bioq", nombre: "Bioquímica y biología molecular", requisitos: ["biologia", "org", "fisica"] },
    { id: "farmaco", nombre: "Farmacología clínica aplicada", requisitos: [] },
    { id: "hemato1", nombre: "Hematología general", requisitos: ["morfo"] },
    { id: "anatomia", nombre: "Técnicas en anatomía patológica y citología exfoliativa", requisitos: ["morfo"] },
    { id: "ingles4", nombre: "Inglés 4", requisitos: ["ingles3"] }
  ],
  5: [
    { id: "quimicaClinica", nombre: "Química clínica general", requisitos: ["equipos", "bioq"] },
    { id: "inmuno1", nombre: "Inmunología general", requisitos: ["bioq"] },
    { id: "hemato2", nombre: "Hematología especial", requisitos: ["hemato1"] },
    { id: "cito", nombre: "Citotecnología exfoliativa", requisitos: ["morfo", "anatomia"] },
    { id: "electiva2", nombre: "Asignatura electiva II", requisitos: [] },
    { id: "actividad2", nombre: "Actividad complementaria II", requisitos: [] }
  ],
  6: [
    { id: "quimicaEsp", nombre: "Química clínica especial", requisitos: ["quimicaClinica"] },
    { id: "inmuno2", nombre: "Inmunología especial", requisitos: ["inmuno1"] },
    { id: "citogenetica", nombre: "Citogenética humana", requisitos: ["hemato2", "bioq"] },
    { id: "bacterio", nombre: "Bacteriología", requisitos: ["bioq"] },
    { id: "electiva3", nombre: "Asignatura electiva III", requisitos: [] },
    { id: "actividad3", nombre: "Actividad complementaria III", requisitos: [] }
  ],
  7: [
    { id: "investigacion", nombre: "Metodología de la investigación", requisitos: ["estadistica"] },
    { id: "etica", nombre: "Ética y deontología", requisitos: ["sociales"] },
    { id: "parasito", nombre: "Parasitología", requisitos: ["inmuno2"] },
    { id: "mico", nombre: "Micología", requisitos: ["inmuno1"] },
    { id: "virologia", nombre: "Virología", requisitos: ["inmuno2"] },
    { id: "banco", nombre: "Hemoterapia y Banco de sangre", requisitos: ["hemato1"] }
  ],
  8: [
    { id: "epi", nombre: "Epidemiología y salud pública", requisitos: ["mate"] },
    { id: "legislacion", nombre: "Legislación en salud", requisitos: ["sociales"] },
    { id: "taller", nombre: "Taller de diseño de proyecto de investigación", requisitos: ["investigacion"] },
    { id: "gestionAdmin", nombre: "Gestión y administración en servicios de salud", requisitos: ["estadistica", "investigacion"] },
    { id: "calidad", nombre: "Gestión de calidad en el laboratorio clínico", requisitos: ["hemato2", "quimicaEsp", "bacterio", "inmuno2", "banco", "cito"] },
    { id: "necropsia", nombre: "Técnicas en necropsia y patología forense", requisitos: ["cito"] },
    { id: "actividad4", nombre: "Actividad complementaria IV", requisitos: [] }
  ],
  9: [
    { id: "practicaHemato", nombre: "Práctica clínica hospitalaria en Hematología", requisitos: [] },
    { id: "practicaBanco", nombre: "Práctica clínica hospitalaria en Hemoterapia y Banco de sangre", requisitos: [] },
    { id: "practicaMicro", nombre: "Práctica clínica hospitalaria en Microbiología", requisitos: [] }
  ],
  10: [
    { id: "trabajo", nombre: "Trabajo de investigación", requisitos: ["taller"] },
    { id: "practicaInmuno", nombre: "Práctica clínica hospitalaria en inmunodiagnóstico", requisitos: [] },
    { id: "practicaQuimica", nombre: "Práctica clínica hospitalaria en química clínica", requisitos: [] },
    { id: "practicaAnatomia", nombre: "Práctica clínica hospitalaria en anatomía patológica", requisitos: [] }
  ]
};

let estadoCursos = JSON.parse(localStorage.getItem("estadoCursos")) || {};

function crearMalla() {
  const board = document.getElementById("kanban-board");
  board.innerHTML = "";

  for (const ciclo in malla) {
    const columna = document.createElement("div");
    columna.className = "cycle-column";

    const titulo = document.createElement("div");
    titulo.className = "cycle-title";
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    malla[ciclo].forEach(curso => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.id = `card-${curso.id}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = curso.id;
      checkbox.checked = estadoCursos[curso.id] || false;

      const label = document.createElement("label");
      label.htmlFor = curso.id;
      label.textContent = curso.nombre;

      card.appendChild(checkbox);
      card.appendChild(label);
      columna.appendChild(card);
    });

    const todosCompletados = malla[ciclo].every(curso => estadoCursos[curso.id]);
    if (todosCompletados && !document.getElementById(`mensaje-ciclo-${ciclo}`)) {
      const mensaje = document.createElement("div");
      mensaje.className = "ciclo-completo";
      mensaje.id = `mensaje-ciclo-${ciclo}`;

      const frase = frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
      mensaje.textContent = frase.replace("{ciclo}", ciclo);

      columna.appendChild(mensaje);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    board.appendChild(columna);
  }

  aplicarBloqueos();
  agregarEventos();
}

function aplicarBloqueos() {
  for (const ciclo in malla) {
    malla[ciclo].forEach(curso => {
      const completado = estadoCursos[curso.id];
      const card = document.getElementById(`card-${curso.id}`);
      const check = card.querySelector("input");

      if (completado) {
        card.classList.add("completed");
        check.checked = true;
      }

      const bloqueado = curso.requisitos.some(pr => !estadoCursos[pr]);
      if (!completado && bloqueado) {
        card.classList.add("locked");
        check.disabled = true;
      }
    });
  }
}

function agregarEventos() {
  const checkboxes = document.querySelectorAll(".course-card input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      estadoCursos[cb.id] = cb.checked;
      localStorage.setItem("estadoCursos", JSON.stringify(estadoCursos));
      crearMalla();
    });
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
