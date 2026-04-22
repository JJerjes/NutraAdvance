// export const especialidadesData = {
//   ginecologia: {
//     titulo: "Especialidad: Ginecología",
//     productos: [
//       {
//         id: "sorbamin",
//         nombre: "Sorbamin NF 30",
//         peru: {
//           foto: "images/productos/sorbamin-peru.png",
//           nombreProd: "Sorbamin (Local)",
//           ficha: "Sales minerales comunes (Óxidos/Sulfatos)",
//           beneficios: "Absorción estándar supeditada a la digestión.",
//           cantidad: "1 Litro.",
//           costo: "S/175.00",
//           duracion: "frasco para 30 días.",
//           certificacion: "Registro Sanitario Local."
//         },
//         usa1: {
//           foto: "",
//           nombreProd: "Klean Hydration (Klean Athlete)",
//           ficha: "Minerales Quelatados + L-Glutamina",
//           beneficios: "Recuperación celular rápida y pureza de grado profesional (NSF Certified).",
//           cantidad: "polvo concentrado (alta pureza)",
//           costo: "S/00.00",
//           duracion: "Rendimiento optimizado.",
//           certificacion: "Certificación NSF for Sport y FDA."
//         },
//         usa2: {
//           foto: "images/productos/nutricost-eaa.png",
//           nombreProd: "EAA + Electrolytes (Nutricost)",
//           ficha: "9 Aminoácidos Esenciales + Complejo Electrolítico",
//           beneficios: "Perfil completo de aminoácidos con mayor biodisponibilidad que fórmulas líquidas.",
//           cantidad: "30-60 Servicios (Alta densidad).",
//           costo: "$$.$$",
//           duracion: "Rendimiento para 60 días.",
//           certificacion: "Certificación GMP y Third Party Tested."
//         }
//       }
//     ]
//   },
// }



export const especialidadesData = {
  ginecologia: {
    titulo: "Ginecología",
    productos: [
      {
        id: "sorbamin",
        nombre: "Sorbamin NF 30", // Primer botón
        peru: { nombreProd: "Sorbamin NF 30", /* otros datos */ },
        usa1: { /* datos producto USA 1 */ },
        usa2: { /* datos producto USA 2 */ }
      },
      {
        id: "pvm-adulto",
        nombre: "PVM Adulto", // Segundo botón
        peru: { nombreProd: "PVM Adulto", /* otros datos */ },
        usa1: { /* datos */ },
        usa2: { /* datos */ }
      },
      {
        id: "endovit",
        nombre: "ENDOVIT", // Tercer botón
        peru: { nombreProd: "ENDOVIT", /* otros datos */ },
        usa1: { /* datos */ },
        usa2: { /* datos */ }
      }
    ]
  }
  // Aquí puedes agregar más especialidades después...
};