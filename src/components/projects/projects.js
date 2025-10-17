import Programming from "../../assets/images/programming.jpg";
import EdgeComputing from "../../assets/images/edgeComputing.jpg";

export const projects = [
  {
    title: "Interfaz IIoT",
    description:
      "Proyecto en .NET/C# basado en microservicios para la integración de dispositivos industriales mediante múltiples protocolos.",
    details:
      "Proyecto desarrollado en .NET con una arquitectura de microservicios orientada a la Computación al Borde (Edge Computing). Implementa una interfaz IIoT que permite comunicarse con distintos dispositivos industriales y fuentes de datos, independientemente del protocolo utilizado (Modbus, MQTT, OPC UA, entre otros). La solución abstrae la lógica de negocio de cada protocolo mediante servicios independientes, promoviendo escalabilidad, bajo acoplamiento y fácil mantenimiento. Incluye monitoreo y procesamiento de alarmas y eventos.",
    github: null,
    deploy: null,
    image: EdgeComputing,
  },
  {
    title: "CodeAgenda",
    description:
      "Aplicación de ejemplo en .NET para organizar proyectos de programación y aprender nuevas tecnologías.",
    details:
      "CodeAgenda está desarrollada siguiendo los principios de CQRS y DDD (Domain-Driven Design). Utiliza Entity Framework Core para el acceso a datos, Mediator para la comunicación entre componentes y AutoMapper para simplificar el mapeo entre objetos. Incluye pruebas unitarias con xUnit. Su arquitectura modular y desacoplada facilita la mantenibilidad y escalabilidad del código.",
    github: "https://github.com/usuario/CodeAgenda",
    deploy: null,
    image: Programming,
  },
];
